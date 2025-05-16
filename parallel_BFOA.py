from copy import copy
from multiprocessing import Manager, Pool
import time
from bacteria import bacteria
import numpy
import copy
from fastaReader import fastaReader
from evaluadorBlosum import evaluadorBlosum  # Asegúrate de importar esto

if __name__ == "__main__":
    numeroDeBacterias = 4
    iteraciones = 3
    tumbo = 2
    secuencias = fastaReader().seqs
    names = fastaReader().names

    for i in range(len(secuencias)):
        secuencias[i] = list(secuencias[i])

    globalNFE = 0
    dAttr= 0.1
    wAttr= 0.002
    hRep=dAttr
    wRep= .001

    manager = Manager()
    numSec = len(secuencias)
    print("numSec: ", numSec)

    poblacion = manager.list(range(numeroDeBacterias))
    names = manager.list(names)

    def poblacionInicial():
        for i in range(numeroDeBacterias):
            bacterium = []
            for j in range(numSec):
                bacterium.append(secuencias[j])
            poblacion[i] = list(bacterium)

    def printPoblacion():
        for i in range(numeroDeBacterias):
            print(poblacion[i])

    operadorBacterial = bacteria(numeroDeBacterias)
    veryBest = [None, None, None] # índice, fitness, alineamiento
    evaluador = evaluadorBlosum()  # Se instancia una vez

    start_time = time.time()
    print("poblacion inicial ...")
    poblacionInicial()

    for it in range(iteraciones):
        print(f"--- Iteración {it+1} ---")
        operadorBacterial.tumbo(numSec, poblacion, tumbo)
        operadorBacterial.cuadra(numSec, poblacion)
        operadorBacterial.creaGranListaPares(poblacion)
        operadorBacterial.evaluaBlosum()
        operadorBacterial.creaTablasAtractRepel(poblacion, dAttr, wAttr, hRep, wRep)
        operadorBacterial.creaTablaInteraction()
        operadorBacterial.creaTablaFitness()
        globalNFE += operadorBacterial.getNFE()

        # Obtener el mejor individuo
        bestIdx, bestFitness = operadorBacterial.obtieneBest(globalNFE)
        mejor_individuo = copy.deepcopy(poblacion[bestIdx])

        # Aplicar refinamiento local
        refinado = operadorBacterial.refinamiento_local(mejor_individuo, evaluador)
        score_refinado = operadorBacterial.evalua_individuo(refinado, evaluador)

        if (veryBest[0] is None) or (score_refinado > veryBest[1]):
            veryBest[0] = bestIdx
            veryBest[1] = score_refinado
            veryBest[2] = refinado

        operadorBacterial.replaceWorst(poblacion, veryBest[0])  # ← usar el índice correcto
        operadorBacterial.resetListas(numeroDeBacterias)

    print("\n=== MEJOR ALINEAMIENTO OBTENIDO ===")
    for i, seq in enumerate(veryBest[2]):
        print(f">{names[i]}\n{''.join(seq)}")
    print(f"\nFitness total: {veryBest[1]}")
    print("--- Tiempo total: %s segundos ---" % (time.time() - start_time))

