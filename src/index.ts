import { RandomLetterGenerator, RandomNumberGenerator, SecuentialLetterGenerator, SecuentialNumberGenerator } from './algorithms';
import config from './config.json';

if (config.tipo !== 'letras' && config.tipo !== 'numeros') {
  throw new Error('Tipo no reconocido.\nTipos válidos: [letras|numeros]');
}
const result: string[] = [];
if (config.secuencial) {
  if (config.tipo == 'letras') {
    result.push(''.padStart(config.longitud, 'A'));
    for(let i = 1; i < config.cantidad; i++) {
      result.push(SecuentialLetterGenerator(result[i-1]));
    }
    console.log(result);
  } else if(config.tipo == 'numeros') {
    result.push('1'.padStart(config.longitud, '0'));
    for(let i = 1; i < config.cantidad; i++) {
      result.push(`${SecuentialNumberGenerator(result[i-1])}`.padStart(config.longitud, '0'));
    }
    console.log(result);
  }
} else {
  if (config.tipo == 'letras') {
    while(result.length < config.cantidad) {
      const nuevoCodigo = RandomLetterGenerator(config.longitud);
      if (!result.find(c => c === nuevoCodigo)) {
        result.push(nuevoCodigo);
      }
    }
    console.log(result);
  } else if(config.tipo == 'numeros') {
    while(result.length < config.cantidad) {
      const nuevoCodigo = RandomNumberGenerator(0, Math.pow(10, config.longitud) - 1)
        .toString()
        .padStart(config.longitud, '0');
      if (!result.find(c => c === nuevoCodigo)) {
        result.push(nuevoCodigo);
      }
    }
    console.log(result);
  }
}