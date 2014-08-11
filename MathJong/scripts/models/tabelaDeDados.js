define(function() 
{
    var  levels = []

    function AddLevel(size, data)
    {
        levels.push({
            size: size,
            data: data
        })

        return levels[levels.length -1]
    }

    function GetSize(level)
    {
        return levels[level].size
    }

    function GetData(level)
    {
        return levels[level].data
    }

    function raiz(valor, b)
    {
        return ! b || b == 2
        ? '&radic,<span style="text-decoration:overline,">&nbsp,' + valor + '&nbsp,</span>'
        : '<sup>' + b + '</sup>&radic,<span style="text-decoration:overline,">&nbsp,' + valor + '&nbsp,</span>'
    }

    function elev(valor)
    {
        return '<sup>' + valor + '</sup>'
    }

    function log(a, b)
    {
        return 'log<sub>' + a + '</sub>' + b
    }

    AddLevel(
        [3, 4], [["5+7", "-6+18", "4+8", "12", "7+8", "15", "10+5", "-10+25", "7+4", "10+7-6", "11", "21-10"]]
    )

    AddLevel(
        [4, 5], [
            ["1+1", "5-3", "12-10", "8-4-2", "3+2", "2*3-1", "5", "1+4", "5+2", "3+4", "10-3",
            "1+6", "5+5", "2+3+5", "2*5", "7+3", "10+3", "7+6", "2*6+1", "20-7"]
        ]
    )

    AddLevel(
        [4, 6], [[
            "2+2", "1+3", "2*2", "5-1", "3+3", "12/2", "36", "2+4", "7*2", "20-6", "2+8+4", "15-1", "5*4", "10*2", "14+6",
            "12+8", "8*2", "4*4", "3*5+1", "32-16", "5*5+2", "23+4", "4*5+7", "21+6"
        ]]
    )

    AddLevel(
        [5, 6], [[
            "1+2", "2*2-1", "3", "7-4", "9 ", "1*3", "3*3", "2*3+3", "7+2", "5+4", "81", "10-1", "10+9", "9*2+1", "20-1", "5*5-6", "6+4+9",
            "25-4-2", "11*2", "19+3", "5*5-3", "14+8", "19+3", "32-6-4", "48/2", "30-6", "12*2", "8*3", "4*6", "32-8"
        ]]
    )

    AddLevel(
        [6, 6], [[
            "13*2", "31-5", "30-3-1", "21+5", "12+11", "30-4", "4*7", "2*7+2*7", "14*2", "30-5+3", "11+17", "30-2", "5*5+6", "21+2*5",
            "7*7-18", "29+3", "6*6-5", "35-4", "5*7", "5*5+2*5", "42-9+2", "5*4+3*5", "12+23", "41-6", "21*2", "50-8", "52-9+1", "6*7", "7*7-7",
            "45-3", "27*2", "25*2+4", "2*5*5+4", "21+33", "8*8-2*5", "72-8"
        ]]
    )

    // To add new levels, make a call for the @method AddLevel(size, data), like the example below:
    // AddLevel(
    //     [1, 2],
    //     [[ "50", "25 + 40" ]]
    // )
    
    return {
        AddLevel: AddLevel,
        obterTexto: GetData,
        obterTamanhoDoNivel: GetSize
    }
})    
    
    
    