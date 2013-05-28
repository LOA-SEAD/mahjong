define([], function() 
{	
	/*var tamanhoDosNiveis = new Array(3);
	
	tamanhoDosNiveis[0] = [2,2];
	tamanhoDosNiveis[1] = [2,2];
	tamanhoDosNiveis[2] = [2,2];
	
	textosDasPecas  = new Array(3);
	
	textosDasPecas[0] = new Array(1);
	textosDasPecas[1] = new Array(1);
	textosDasPecas[2] = new Array(1);
	
	textosDasPecas[0][0] = [	"2", 	"1+1", 		"2*1", 		"4/2"];

	
	textosDasPecas[1][0] = [	"2", 	"1+1", 		"2*1", 		"4/2"];

	textosDasPecas[2][0] = [	"2", 	"1+1", 		"2*1", 		"4/2"];*/

	
	
	var tamanhoDosNiveis = new Array(3);
	tamanhoDosNiveis[0] = [8,8];
	tamanhoDosNiveis[1] = [10,10];
	tamanhoDosNiveis[2] = [12,12];

	function raiz(valor, b)
	{
		if(!b)
			b=2;
		if(b==2)
			return '&radic;<span style="text-decoration:overline;">&nbsp;'+valor+'&nbsp;</span>';
		else
			return '<sup>'+b+'</sup>&radic;<span style="text-decoration:overline;">&nbsp;'+valor+'&nbsp;</span>';
	}
	function elev(valor)
	{
		return '<sup>'+valor+'</sup>';
	}
	function log(a, b)
	{
		return 'log<sub>'+a+'</sub>'+b;
	}
	textosDasPecas  = new Array(3);
	
	textosDasPecas[0] = new Array(16);
	textosDasPecas[1] = new Array(25);
	textosDasPecas[2] = new Array(30);
	
	textosDasPecas[0][0] = [	"2", 	"1+1", 		"2*1", 		"4/2"];
	textosDasPecas[0][1] = [	"3", 	"2+1", 		"3*1", 		"6/2"];
	textosDasPecas[0][2] = [	"4", 	"2+2", 		"2*2", 		"16/4"];
	textosDasPecas[0][3] = [	"5", 	"3+2", 		"2*2+1", 	"20/4"];
	textosDasPecas[0][4] = [	"6", 	"3+3", 		"2*3", 		"12/2"];
	textosDasPecas[0][5] = [	"7", 	"4+3", 		"2*3+1", 	"21/3"];
	textosDasPecas[0][6] = [	"8", 	"4+4", 		"2*4", 		"24/3"];
	textosDasPecas[0][7] = [	"9", 	"6+3", 		"3*3", 		"36/4"];
	textosDasPecas[0][8] = [	"10",	"5+5", 		"2*5", 		"40/4"];
	textosDasPecas[0][9] = [	"11", 	"6+5", 		"2*5+1", 	"22/2"];
	textosDasPecas[0][10] = [	"12", 	"4+8", 		"2*6",		"36/3"];
	textosDasPecas[0][11] = [	"13", 	"5+8", 		"2*6+1", 	"26/2"];
	textosDasPecas[0][12] = [	"14", 	"7+7", 		"2*7", 		"28/2"];
	textosDasPecas[0][13] = [	"15", 	"8+7", 		"3*5", 		"45/3"];
	textosDasPecas[0][14] = [	"16", 	"8+8", 		"4*4", 		"32/2"];
	textosDasPecas[0][15] = [	"20", 	"10+10", 	"5*4", 		"60/3"];
	

	
	textosDasPecas[1][0] = [	"1",	"7"+elev(0), 		"1", 		"4"+elev(0)];
	textosDasPecas[1][1] = [	"4", 	"2"+elev(2), 		"1+3", 		"8-4"];
	textosDasPecas[1][2] = [	"9", 	"3"+elev(2), 		"5+4", 		"10-1"];
	textosDasPecas[1][3] = [	"16", 	"4"+elev(2), 		"15+1",		"20-4"];
	textosDasPecas[1][4] = [	"25", 	"5"+elev(2), 		"5*5", 		"50-25"];
	textosDasPecas[1][5] = [	"36", 	"6"+elev(2), 		"6*6", 		"40-4"];
	textosDasPecas[1][6] = [	"49", 	"7"+elev(2), 		"4*10+9", 	"50-1"];
	textosDasPecas[1][7] = [	"64", 	"8"+elev(2), 		"6*10+4", 	"70-6"];
	textosDasPecas[1][8] = [	"81", 	"9"+elev(2), 		"8*10+1", 	"90-9"];
	textosDasPecas[1][9] = [	"100", 	"10"+elev(2),		"10*10", 	"200/2"];
	textosDasPecas[1][10] = [	"12", 	"3"+elev(2)+"+3", 	"4*3", 		"15-3"];
	textosDasPecas[1][11] = [	"24", 	"5"+elev(2)+"-1", 	"12*2", 	"30-6"];
	textosDasPecas[1][12] = [	"42", 	"50-8", 			"21*2", 	"45-3"];
	textosDasPecas[1][13] = [	"50", 	"5*10", 			"25*2", 	"100/2"];
	textosDasPecas[1][14] = [	"21", 	"3*7", 				"11+10", 	"30-9"];
	textosDasPecas[1][15] = [	"22", 	"3*7+1", 			"11+11", 	"25-3"];
	textosDasPecas[1][16] = [	"45", 	"5*9", 				"25+20", 	"50-5"];
	textosDasPecas[1][17] = [	"56", 	"5*11+1", 			"50+6", 	"60-4"];
	textosDasPecas[1][18] = [	"72", 	"7*10+2", 			"40+32", 	"80-8"];
	textosDasPecas[1][19] = [	"38", 	"7*5+3", 			"18+20", 	"40-2"];
	textosDasPecas[1][20] = [	"65", 	"6*10+5", 			"30+35", 	"70-5"];
	textosDasPecas[1][21] = [	"90", 	"9*10", 			"45+45", 	"180/2"];
	textosDasPecas[1][22] = [	"85", 	"5*17", 			"50+35", 	"90-5"];
	textosDasPecas[1][23] = [	"99", 	"11*9", 			"19+80", 	"100-1"];
	textosDasPecas[1][24] = [	"33", 	"3*11", 			"30+3", 	"40-7"];

                   
	textosDasPecas[2][0] = [	"2",			"1+1", 		"2"+elev(1), 					"-6+8", 					"2", log(15,225), log(12, 144), log(11,121)];
	textosDasPecas[2][1] = [	"3",			"2+1", 		"3"+elev(1), 					"3",				 		"3", log(3, 27), log(5, 125), log(2,8)];
	textosDasPecas[2][2] = [	"4",			"3+1", 		"2"+elev(2), 					"-77+(81)", 				"4", log(2, 16), "8/2", "16/4", raiz(16), "2"+elev(2)];
	textosDasPecas[2][3] = [	"5",			"2+3", 		"5"+elev(1), 					"[(-55)+60]", 				];
	textosDasPecas[2][4] = [	"6",			"2+4", 		"2"+elev(2)+"+2", 				raiz(9)+'+'+raiz(9)];
	textosDasPecas[2][5] = [	"7",			"4+3", 		"(7"+elev(0)+"+6"+elev(1)+")", 	raiz(49)];
	textosDasPecas[2][6] = [	"36",			"21+15", 	"36", 							"72+(-36)"];
	textosDasPecas[2][7] = [	"8", 			"6+2", 		"4*2", 							raiz(64)];
	textosDasPecas[2][8] = [	"9", 			"5+4", 		"3*3", 							"4+"+raiz(25)];
	textosDasPecas[2][9] = [	"10", 			"7+3", 		raiz(100), 						"5*2"];
	textosDasPecas[2][10] = [	"11", 			"5+6", 		raiz(121), 						"1+(2*5)", 					raiz(121), 	"22/2"];
	textosDasPecas[2][11] = [	"12", 			"5+7", 		"9+2+1", 						"("+raiz(36)+")+6", 		raiz(144), "6*2", "12", "4*3"];
	textosDasPecas[2][12] = [	"16", 			"8+8", 		"-24+40", 						"4*4"];
	textosDasPecas[2][13] = [	"25", 			"18+7", 	raiz(625), 						"40-15", 					raiz(625), "5"+elev(2)];
	textosDasPecas[2][14] = [	"49", 			"42+7", 	raiz(49)+"*7", 					"50-1"];
	textosDasPecas[2][15] = [	"64", 			"6+58", 	"8"+elev(2), 					"100-36", 					"4*4*4", "60+4"];
	textosDasPecas[2][16] = [	"81", 			"78+3", 	"9"+elev(2), 					"8*10+1"];
	textosDasPecas[2][17] = [	"100", 			"73+27", 	"10"+elev(2), 					"120-20", 					raiz(10000), "10"+elev(2)];
	textosDasPecas[2][18] = [	"121", 			"94+27", 	"11"+elev(2), 					"10"+elev(2)+"+21"];
	textosDasPecas[2][19] = [	"169", 			"77+92", 	"13*13", 						"168+1"];
	textosDasPecas[2][20] = [	"13", 			"8+5", 		"10+3", 						raiz(144)+"+1"];
	textosDasPecas[2][21] = [	"17", 			"9+8", 		"17"+elev(1), 					"5+12"];
	textosDasPecas[2][22] = [	"19", 			"6+13", 	"18+1", 						raiz(400)+"-1"];
	textosDasPecas[2][23] = [	"289", 			"238+51", 	"285+4", 						"200+89", 					"289", "280+9"];
	textosDasPecas[2][24] = [	"361", 			"335+26", 	"360+1", 						"300+61"];
	textosDasPecas[2][25] = [	"15", 			"9+6", 		"3*5", 							raiz(255)];
	textosDasPecas[2][26] = [	"21", 			"3+18", 	"7*3", 							raiz(144)+"+9"];
	textosDasPecas[2][27] = [	"143+1", 		"12"+elev(2)];
	textosDasPecas[2][28] = [	"1", 			"56+(-55)",	"2*3+(-5)", 					"-(7*8)+57"];
	textosDasPecas[2][29] = [	"4*8", 			"64/2"];
	
	
	
	return {
		obterTexto: function (i)
		{			
			return textosDasPecas[i];			
		},
		obterTamanhoDoNivel:function (i)
		{
			return tamanhoDosNiveis[i];
		},
	}
})	
	
	
	