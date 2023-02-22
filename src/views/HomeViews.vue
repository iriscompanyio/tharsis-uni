<script setup>
 import MBrand from '../components/MBrand.vue';
import MCarrousel from '../components/MCarrousel.vue';
import MCounter from '../components/MCounter.vue';
import MEvents from '../components/MEvents.vue';
import MVideo from '../components/MVideo.vue';
   
</script>
 <template>
    <!-- <main class="text-light-50">
     <h1>{{$t("home.header") }}</h1>
     <p>{{ $t("home.create_by") }}</p>
     <p>This page has been visited 30 times.</p>   
    </main> -->
    <MBrand/>
    <MCounter/>
    <MCarrousel/>
    <MVideo/>
    <MEvents/>
</template>