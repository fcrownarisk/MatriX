 import './Red.js'
 import './Green.js'
 import './Blue.js'
 import './anti.js'
 export const impact0 = 'element1+element2+element3+element4'
 export const impact1 = 'element5-element6-element7-element8'
 export const impact2 = 'element9*element10*element11*element12'
 export const impact3 = 'element13/element14/element15/element16'
 export const impact4 = 'element17%element18%element19element20'

 export const impact5 = 'impact0 * impact1' + 'impact2 * impact3' 
 export const impact6 = 'impact1 - impact2' + 'impact3 - impact4'
 export const impact7 = 'impact2 / impact3' + 'impact4 / impact0'
 export const impact8 = 'impact3 % impact4' + 'impact1 % impact2'
 console.log('element','Green','Blue','anti')
 console.log(impact0, impact1, impact2, impact3, impact4)
 console.log(impact5, impact6, impact7, impact8)
