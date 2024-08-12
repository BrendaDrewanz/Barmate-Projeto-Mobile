# Meu Projeto

## SUMÁRIO

- [Introdução](#resumo)
- [Requisitos do Projeto](#requisitos-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Interface de Programação de Aplicação](#interface-de-programação-de-aplicação)

## Resumo

O Barmate é um pub em ascensão, conhecido pela sua atmosfera acolhedora, drinks artesanais, drinks diversificados e uma seleção de cervejas excepcionais. Localizado no coração da cidade, o Barmate rapidamente se tornou o ponto de encontro preferido para aqueles que buscam um ambiente descontraído e amigável para relaxar após um longo dia de trabalho. 
Com o crescimento constante e uma clientela fiel, os proprietários do Barmate estão determinados a levar o negócio a um novo patamar. Com isso em mente, eles estão explorando novas formas de planejar e otimizar suas operações, visando oferecer uma experiência ainda melhor aos seus clientes. 
Uma das principais iniciativas em consideração é o desenvolvimento de um aplicativo próprio para reservas. Este aplicativo não apenas facilitará o processo de reserva, mas também permitirá que os clientes aproveitem ofertas exclusivas e eventos especiais, fortalecendo ainda mais a relação do Barmate com sua comunidade.


## Requisitos do Projeto

### COLOR CODE
Como Barmate ainda é novo em seus negócios, sua identidade visual é simples, comparado a grandes nomes como “Barzin Gastrobar Ipanema”, que tem tons esverdeados em seu site e slogan. Barmate tem tons de cinza claro, utilizando um pouco de verde, e tons mais quentes laranja queimado e marrom, como a imagem a seguir:

<p align="center">
  <img src="https://media.discordapp.net/attachments/1218606975382851599/1226605634665975899/image.png?ex=66771d84&is=6675cc04&hm=599b96c174936ad8ea0e5a3f0e84d8f2f9cd9518f21a157d03ec708c00357f30&=&format=webp&quality=lossless" alt="Texto Alternativo">
</p>

### SLOGAN
O slogan "Um copo atrás de outro" é uma escolha estratégica e eficaz para o Barmate por diversos fatores:

* O slogan é curto, simples e fácil de lembrar, o que é crucial para a identidade de uma marca.

* “Um copo atrás de outro" apresenta uma experiência contínua e agradável, indicando que cada bebida no Barmate é tão boa que faz os clientes quererem pedir a próxima. Isso cria uma expectativa positiva e divertida, atraindo pessoas que procuram um bom momento.

* Barmate é um lugar conhecido pela sua atmosfera acolhedora e uma excelente seleção de bebidas. O slogan reforça essa identidade, destacando o prazer de saborear várias bebidas em um ambiente agradável.

<p align="center">
  <img src="./assets/logo.png" alt="Texto Alternativo">
</p>

### FUNCIONALIDADES DO APLICATIVO

O aplicativo terá seu design simples, utilizando apenas três navegações, sendo em sua aplicação chamada de tabs. Em suas navegações contará com feed, reserva e perfil.

Seu início começará com a tela de login, onde o cliente deverá digitar seus dados cadastrados ou se cadastrar logo abaixo. 

Ao iniciar o aplicativo, após preencher o login, aparecerá a tela de feed, com as imagens de seu catálogo de bebidas.

As navegações seguintes são: o perfil, onde se pode ver as informações cadastradas anteriormente e a reserva, onde o cliente pode marcar o dia de sua reserva.

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1090377233367056506/1253811305220145293/image.png?ex=66773645&is=6675e4c5&hm=b30ec44c6bf6b692140d0ce48ef6183da163b455dc0ba42222328495a4c6cd28&" alt="Texto Alternativo">
</p>

## Tecnologias Utilizadas

### IONIC 7
Ionic é um Framework Open Source, ele fornece ferramentas e serviços para o desenvolvimento de aplicativos híbridos móveis, de desktop e web apps. Ionic está sendo utilizado para criar o aplicativo de Barmate.

### ANGULAR
Angular é um framework de código aberto desenvolvido pelo Google para a criação de aplicativos dinâmicos e interativos da web. Estamos o utilizando juntamente ao Ionic, pois os dois conseguem se integrar muito bem.

### TYPESCRIPT
TypeScript é uma linguagem de programação, desenvolvida pela Microsoft. Ele é uma extensão da linguagem JavaScript que adiciona recursos de tipagem estática ao JavaScript, tornando o código mais robusto e menos propenso a erros. Utilizando TypeScript, é possível definir tipos explícitos para variáveis, parâmetros de funções e retornos, o que facilita a descoberta de bugs e melhora a capacidade de manutenção do código.

### FIREBASE
Firebase é uma plataforma desenvolvida pelo Google, a qual oferece uma ampla gama de ferramentas e serviços para facilitar o desenvolvimento de aplicativos móveis e web. Ele é amplamente utilizado para aplicativos móveis, por conta de suas características integradas que simplificam a criação e a manutenção de funcionalidades essenciais.

### API
A utilização de APIs propõe uma infraestrutura modular, escalável e segura para o desenvolvimento de aplicativos móveis, permitindo integrar funcionalidades avançadas, melhorar a manutenção e acelerar o processo de desenvolvimento.

## Interface de Programação de Aplicação

Application Programming Interface, ou melhor API. É um conjunto de serviços que foram implementados em um programa de computador que são disponibilizados para que outros programas possam usá-los diretamente de forma simplificada. Em Barmate, estaremos utilizando as seguintes API’s:

### ResOS
É utilizada para serem feitas as reservas, com a sua aplicação as reservas foram implementadas de uma maneira muito simples e podem ser gerenciados pelo próprio site da ResOS.


### Google Maps
Sua utilização é importante para que os clientes possam saber seu endereço e como se dirigirem ao estabelecimento.


### The Cocktail DB
Esta API conta com um cardápio diverso de drinks, os quais também fazem parte do cardápio de Barmate, então o mesmo foi integrado em seu feed.

