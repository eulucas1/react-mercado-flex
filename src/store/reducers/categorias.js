import { createSlice } from '@reduxjs/toolkit';
import bebidasThumb from '../../assets/categorias/thumbnail/bebidas.jpg'
import bebidasHeader from '../../assets/categorias/header/bebidas.jpg'

import perfumariaThumb from '../../assets/categorias/thumbnail/perfumaria.jpg'
import perfumariaHeader from '../../assets/categorias/header/perfumaria.jpg'

import docesThumb from '../../assets/categorias/thumbnail/doces.jpg' 
import docesHeader from '../../assets/categorias/header/doces.jpg' 

import masssasThumb from '../../assets/categorias/thumbnail/massas.jpg'
import masssasHeader from '../../assets/categorias/header/massas.jpg'

import hortifrutiThumb from '../../assets/categorias/thumbnail/hortifruti.jpg'
import hortifrutiHeader from '../../assets/categorias/header/hortifruti.jpg'

const initialState = [{
  nome: 'Bebidas',
  thumbnail: bebidasThumb,
  header: bebidasHeader,
  id: 'bebidas',
  descricao: 'Água, sucos, refrigerantes e muito mais pensados em você!'
}, {
  nome: 'Masssas',
  thumbnail: masssasThumb,
  header: masssasHeader,
  id: 'masssas',
  descricao: 'As melhores masssas aqui no seu mercado!'
}, {
  nome: 'Doces e Sobremesas',
  thumbnail: docesThumb,
  header: docesHeader,
  id: 'doces',
  descricao: 'As melhorhes opções de Doces ou Sobremesas para tudo ficar incrível!'
}, {
  nome: 'Hortifruti',
  thumbnail: hortifrutiThumb,
  header: hortifrutiHeader,
  id: 'hortifruti',
  descricao: 'Com abastecimento diário para garantir o melhor a você e com a maior variedade'
}, {
  nome: 'Perfumaria',
  thumbnail: perfumariaThumb,
  header: perfumariaHeader,
  id: 'perfumaria',
  descricao: 'Encontre os produtos que são a sua cara!'
}];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;