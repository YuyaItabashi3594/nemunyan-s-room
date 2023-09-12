<script setup>
import { Carousel,Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = [
  {image:'/works/rhythmgame/sana.jpg',song:'雪は何色',url:'https://m.mugzone.net/chart/126909'},
  {image:'/works/rhythmgame/majokoi.jpg',song:'あの場所へ',url:'https://m.mugzone.net/chart/93059'},
  {image:'/works/rhythmgame/a little more.jpg',song:'A Little More',url:'https://m.mugzone.net/chart/128188'},
  {image:'/works/rhythmgame/amor.jpg',song:'Amor Buffer',url:'https://m.mugzone.net/chart/120800'},
]

const songName = ref('')

const myCarousel = ref(0)

function changeSongName(song){
  songName.value = song
}

function changeActiveSlide(index){
  myCarousel.value = index
}

</script>

<template>
  <Carousel v-model="myCarousel" :autoplay="3000" :pauseAutoplayOnHover="true" :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="(slide,index) in slides" :key="slide">
      <div class="carousel__item relative">
        <SlideContent :slide="slide" @hovered="changeSongName" @unhovered="changeSongName('')"
        @clicked="changeActiveSlide(index)"
        :isLinkActive="myCarousel == index"/>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
  <p class="text text-center">{{ songName }}</p>
</template>


<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
