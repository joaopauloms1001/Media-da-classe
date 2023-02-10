function Calcular() {
    var a = document.getElementById('naluno').value
    var b = document.getElementById('a1')
    var c = document.getElementById('a2')
    var d = document.getElementById('t1')
    var e = document.getElementById('t2')
    var f = document.getElementById('qaluno')

    
    var bl = Number(b.value)
    var cl = Number(c.value)
    var dl = Number(d.value)
    var el = Number(e.value)
    

        m1 = ((bl + cl + dl + el) / 4)

    res.innerHTML = `Aluno: ${a} Média:${m1}`

    
    
    
}