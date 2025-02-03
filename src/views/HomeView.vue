<template>
   <section class="second-screen">
      <div class="container">
         <h2 class="section__title">Поздравления</h2>
         <div class="second-screen__item">
            <p class="second-screen__text">
               От всей души без многословия.<br />
               Желаю счастья и здоровья.<br />
               Желаю благ тебе земных -<br />
               Я знаю, ты достоин их!<br />
            </p>
            <img class="second-screen__img" src="../assets/images/IMG_3240.png" alt="photo" />
         </div>

         <div class="second-screen__item">
            <img class="second-screen__img" src="../assets/images/IMG_3228.png" alt="photo" />
            <p class="second-screen__text">
               Ты классный парень, спору нет.<br />
               Тебе желаем жить без бед.<br />
               Пусть у тебя всё будет клёво.<br />
               Ты сильным будь.<br />
               И будь здоровым!
            </p>
         </div>

         <div class="second-screen__item">
            <p class="second-screen__text">
               С днём рождения!<br />
               Драйва. Энергии. Креативных идей.<br />
               Новых достижений и покорения самых<br />
               ВЫСОКИХ ВЕРШИН!!!<br />
            </p>
            <img
               class="second-screen__img second-screen__img-vertical"
               src="../assets/images/IMG_3242.png"
               alt="photo"
            />
         </div>
      </div>
   </section>

   <section class="third-screen">
      <div class="container">
         <h2 class="section__title">Фото-галерея</h2>

         <div class="third-screen__slider">
            <div class="slider">
               <div class="slide active">
                  <div class="slide__content"></div>
               </div>

               <div class="slide">
                  <div class="slide__content"></div>
               </div>

               <div class="slide">
                  <div class="slide__content"></div>
               </div>

               <div class="slide">
                  <div class="slide__content"></div>
               </div>

               <div class="slide">
                  <div class="slide__content"></div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section class="video-block">
      <div class="container">
         <h2 class="section__title">Видео-поздравление</h2>

         <div class="box__video">
            <video class="video__end" controls>
               <source src="../assets/video/redpandacompress_renat-video.mp4" type="video/mp4" />
            </video>
         </div>
      </div>
   </section>
</template>

<script setup></script>
