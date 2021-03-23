
     module.exports = {
     
     // convertendo o formato de milisegundo por yyyy-mm-dd   
    date(timestamp) {
        const date = new Date (timestamp)  
        
        //o UTC deixa a data universal 
        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate ()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()

        // return yyyy-mm-dd
        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`, //iso
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`

        }   
    },
    // FORMATANDO O PREÇO PARA MOEDA BRL
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
        }).format(price/100)
    }
}

