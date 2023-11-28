import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import agua from '../../assets/itens/agua.jpg'
import aguaGas from '../../assets/itens/agua-com-gas.jpg'
import refrigerante from '../../assets/itens/refrigerante.jpg'
import suco from '../../assets/itens/suco-de-laranja.jpg'

import capeletti from '../../assets/itens/capeletti.jpg'
import lasanha from '../../assets/itens/lasanha.jpg'
import macarrao from '../../assets/itens/macarrao.jpg'
import pastel from '../../assets/itens/pastel.jpg'

import chocolate from '../../assets/itens/chocolate.jpg'
import cremeDeLeite from '../../assets/itens/creme-de-leite.jpg'
import doceDeLeite from '../../assets/itens/doce-de-leite.jpg'
import leiteCondensado from '../../assets/itens/leite-condensado.jpg'

import alface from '../../assets/itens/alface.jpg'
import cenoura from '../../assets/itens/cenoura.jpg'
import laranja from '../../assets/itens/laranja.jpg'
import limao from '../../assets/itens/limao.jpg'

import shampoo from '../../assets/itens/shampoo.jpg'
import desodorante from '../../assets/itens/desodorante.jpg'


const initialState = [{
  titulo: ' Água - 500ml',
  descricao: 'Está com calor e precisando se hidratar? Aqui está a melhor melhor opção.',
  foto: agua,
  favorito: false,
  preco: 2.5,
  id: uuid(),
  categoria: 'bebidas'
}, {
  titulo: 'Refrigerante - 2L',
  descricao: 'Combinaçãpo perfeita para o lanche ou comidas diferentes, nada melhor que um Refrigerante geladinho para acompanhar!',
  foto: refrigerante,
  favorito: false,
  preco: 7.0,
  id: uuid(),
  categoria: 'bebidas'
}, {
  titulo: ' Suco de Laranja - 2L',
  descricao: 'Quer ir pela opção que contém sabor e mais saudável? Compre o melhor suco de laranja natural',
  foto: suco ,
  favorito: false,
  preco: 6.75,
  id: uuid(),
  categoria: 'bebidas'
}, {
  titulo: 'Água com Gás - 500ml',
  descricao: 'Água é sempre bem-vinda e não importa como. Prefere com gás Temos também, compre e se refresque em qualquer momento!',
  foto: aguaGas,
  favorito: false,
  preco: 3.5,
  id: uuid(),
  categoria: 'bebidas'
}, {
  titulo: 'Pacote de Capeletti - 500g',
  descricao: 'Já imaginou uma refeição diferenciada? Compre e saboreie a delicia de um bom capeletti.',
  foto: capeletti ,
  favorito: false,
  preco: 10.0,
  id: uuid(),
  categoria: 'masssas'
}, {
  titulo: 'Massa para Lasanha - 1kg',
  descricao: 'Prepare a melhor lasanha, no melhor almoço de domingo! Aqui você encontra a melhor das massas.',
  foto: lasanha,
  favorito: false,
  preco: 13.9,
  id: uuid(),
  categoria: 'masssas'
}, {
  titulo: 'Pacote de Macarrão Penne - 500g',
  descricao: 'Pensou em fazer aquele macarrão rápido e fácil que todo mundo gosta? Temos o melhor, compre e seja elogiado.',
  foto: macarrao,
  favorito: false,
  preco: 4.5,
  id: uuid(),
  categoria: 'masssas'
}, {
  titulo: 'Massa para Pastel - 500g ',
  descricao: 'Está com vontande da crocância de um pastel de feira, mas nunca acha uma massa boa? Seu problema acabou, compre já!',
  foto: pastel,
  favorito: false,
  preco: 7.8,
  id: uuid(),
  categoria: 'masssas'
}, {
  titulo: 'Barra de Chocolate - 98g',
  descricao: 'Após a refeição deu aquela vontade de um docinho? Nada melhor que uma ótima barra de chocolate para matar de vez a sua vontade!',
  foto: chocolate,
  favorito: false,
  preco: 6.90,
  id: uuid(),
  categoria: 'doces'
}, {
  titulo: 'Creme de Leite - 200g',
  descricao: 'Viu aquela receita de um delicoso doce na internet e já se organizou pra fazer? Não esqueça do Creme de leite!',
  foto: cremeDeLeite ,
  favorito: false,
  preco: 2.85,
  id: uuid(),
  categoria: 'doces'
}, {
  titulo: 'Doce de Leite - 300g',
  descricao: 'Prefere doce de leite no lugar do chocolate? Tudo bem aqui você encontra o melhor Doce de Leite com sabor caseiro!',
  foto: doceDeLeite,
  favorito: false,
  preco: 6.90,
  id: uuid(),
  categoria: 'doces'
}, {
  titulo: 'Leite Condensado - 395g ',
  descricao: 'Viu aquela receita de um delicoso doce na internet e já se organizou pra fazer? Não esqueça do Leite Condensado!',
  foto: leiteCondensado,
  favorito: false,
  preco: 7.60,
  id: uuid(),
  categoria: 'doces'
}, {
  titulo: 'Alface',
  descricao: 'Pensando em iniciar aquela dieta depois de tanto doce? Nada melhor do que começar aqui, no mercado flex!',
  foto: alface,
  favorito: false,
  preco: 2.60,
  id: uuid(),
  categoria: 'hortifruti'
}, {
  titulo: 'Cenoura - 1kg',
  descricao: 'Não é da dieta e quer fazer um bolo de cenoura caseiro? Compre aqui e garanta qualidade na hora de fazer sua deliciosa massa!',
  foto:cenoura ,
  favorito: false,
  preco: 5.50,
  id: uuid(),
  categoria: 'hortifruti'
}, {
  titulo: 'Laranja - 1kg',
  descricao: 'Nada melhor do que chupar uma laranja no fim da tarde ou após o almoço, quem sabe até fazer um suco. Compre já',
  foto: laranja,
  favorito: false,
  preco: 6.70,
  id: uuid(),
  categoria: 'hortifruti'
}, {
  titulo: 'Limão - 100g',
  descricao: 'Suco, acompanhamento e até tempero, sempre precisamos de limão, compre já e sempre tenha em mãos!',
  foto: limao,
  favorito: false,
  preco: 1.99,
  id: uuid(),
  categoria: 'hortifruti'
}, {
  titulo: 'Shampoo e Condicionador - 400ml',
  descricao: 'Para lavar, hidratar, finalizar ou usar como quiser, garanta a melhor dupla para o seu cabelo com o melhor preço!',
  foto: shampoo,
  favorito: false,
  preco: 15.0,
  id: uuid(),
  categoria: 'perfumaria'
}, {
  titulo: 'Desodorante',
  descricao: 'Quer comprar para aquela pessoa que as 7h da manhã está com mau cheiro no metrô? aqui está a solução!.',
  foto: desodorante,
  favorito: false,
  preco: 4.90,
  id: uuid(),
  categoria: 'perfumaria'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1);
    }
  }
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem } = itensSlice.actions;

export default itensSlice.reducer;