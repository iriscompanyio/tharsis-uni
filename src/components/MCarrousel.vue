<template>
  <div id="sponsors" class="my-2rem bg-hex-171923 w-1056px mx-auto rounded-15px h-401px sm: <lg:w-318px">
    <div class="slider lg:w-60rem sm:20vw">
      <p
        class="mt-39px w-987px h-148px mx-auto text-32px text-center text-white <lg:w-235px <lg:text-17px"
      >
        {{ $t("carrousel.title") }}
      </p>
      <p class="text-32px text-hex-E8684B text-center sm:W-212px <md:text-17px mb-31px">
        {{ $t("carrousel.p") }}
      </p>
      <div class="slide-track">
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747879/tharsis-uni/Group_1000001785_gw1tyu.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747918/tharsis-uni/Group_1000001786_hdx1tr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747967/tharsis-uni/Group_1000001787_nwius4.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675748049/tharsis-uni/Group_1000001788_crpglr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747879/tharsis-uni/Group_1000001785_gw1tyu.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747918/tharsis-uni/Group_1000001786_hdx1tr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747967/tharsis-uni/Group_1000001787_nwius4.jpg"
            alt=""
          />
        </div>

        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747879/tharsis-uni/Group_1000001785_gw1tyu.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747918/tharsis-uni/Group_1000001786_hdx1tr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747967/tharsis-uni/Group_1000001787_nwius4.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675748049/tharsis-uni/Group_1000001788_crpglr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747879/tharsis-uni/Group_1000001785_gw1tyu.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747918/tharsis-uni/Group_1000001786_hdx1tr.jpg"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://res.cloudinary.com/dkljgkuyy/image/upload/v1675747967/tharsis-uni/Group_1000001787_nwius4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.slider {
  margin: auto;
  overflow: hidden;
}

.slider .slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
  -webkit-animation: scroll 40s linear infinite;
  width: calc(200px * 14);
}

.slider .slide {
  width: 200px;
  margin: 1rem;
}

.slider .slide img {
  width: 100%;
  border-radius: 20px;
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-200px * 7));
    transform: translateX(calc(-200px * 7));
  }
}
</style>
