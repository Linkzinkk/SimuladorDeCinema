// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica
function calcular(){
    // ============================================================================
    // 1. PEGAR OS ELEMENTOS DA TELA
    // ============================================================================

    // Aqui pegamos cada checkbox pelo Id
    let freira = document.getElementById("freira") 
    let itACoisa = document.getElementById("it")
    let michael = document.getElementById("mj")
    let oCondeDeMonteCristo = document.getElementById("count-monte-cristo")
    let oMeninoDoPijamaListrado = document.getElementById("menino-pijama-listrado")
    let rango = document.getElementById("rango")
    let TodoMundoEmPanico = document.getElementById("scary-movie")


    //INGRESSOS

    let ingressoInteiro = document.getElementById("ingressoInteiro")
    let IngressoMeio = document.getElementById("ingressoMeio")
    let ingressoIdoso = document.getElementById("ingressoIdoso")
    // ============================================================================
    // 2. VARIÁVEIS INICIAIS
    // ============================================================================

    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""

    // ============================================================================
    // 3. VERIFICAR CADA PRODUTO
    // ============================================================================
    // Se o checkbox estiver marcado  (true)
    if(freira.checked){ // Soma o valor do hambúrguer
        itens = itens + "A freira<br>" // Adiciona ao texto dos produtos
    }
    if(itACoisa.checked){
        itens = itens + "It a Coisa<br>"
    }
    if(michael.checked){
        itens = itens + "Michael Jackson<br>"
    }
    if(oCondeDeMonteCristo.checked){
        itens = itens + "O Conde de Monte Cristo<br>"
    }
    if(oMeninoDoPijamaListrado.checked){
        itens = itens + "O menino do pijama listrado<br>"
    }
    if(rango.checked){
        itens = itens + "rango<br>"
    }
    if(TodoMundoEmPanico.checked){
        itens = itens + "Todo Mundo Em Pânico<br>"
    }

/* preços */

    if(ingressoInteiro.checked){
        total = total + 30
        itens = itens + "Ingresso Inteiro<br>"
    }
    if(ingressoMeio.checked){
        total = total + 15
        itens = itens + "Meio ingresso<br>"
    }
    
    if(ingressoIdoso.checked){
        total = total + 20
        itens = itens + "Ingresso geriatrico<br>"
    }
    // ============================================================================
    // 4. PEGAR DIV DO RESULTADO
    // ============================================================================
    let resultado = document.getElementById("resultado")

    // ============================================================================
    // 5. VALIDAÇÃO
    // ============================================================================
    // Se não escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos 1 item."
        return // Para função aqui
    }

    // ============================================================================
    // 6. DESCONTO
    // ============================================================================
    let subtotal = total
    let desconto = 0
    // Se o valor dor maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.05 // 5%
    }

    // ============================================================================

    // ============================================================================
    // 8. TOTAL FINAL
    // ============================================================================
    let totalFinal = subtotal - desconto

    // ============================================================================
    // 9. MOSTRAR O RESULTADO
    // ============================================================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>" + itens + 
    "<br> Subtotal: R$" + subtotal.toFixed(2) +
    "<br> Desconto: R$" + desconto.toFixed(2) +
    "<br><strong> Total: R$" + totalFinal.toFixed(2) +
    "</strong>"
}
