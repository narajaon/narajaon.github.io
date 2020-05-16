<template>
  <div class="about-page">
    <div class="profile-banner">
      <img
        src="~assets/images/Fabien-copie-2-570x570.jpg"
        alt="profile picture"
        align="left"
      >
      <div class="profile-infos">
        <h1>About me</h1>
        <p class="page-content">
          Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales.
          et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.
        </p>
      </div>
    </div>

    <stack-list />
    <!-- 
        <div class="page-category">
            <h3>What kind of dev I am</h3>
            <p class="page-content">
                Cuius acerbitati uxor grave accesserat incentivum, germanitate Augusti turgida supra modum, quam Hannibaliano regi fratris filio antehac
                Constantinus iunxerat pater, Megaera quaedam mortalis, inflammatrix saevientis adsidua, humani cruoris avida nihil mitius quam maritus;
                qui paulatim eruditiores facti processu temporis ad nocendum per clandestinos versutosque rumigerulos conpertis leviter addere quaedam male suetos
                falsa et placentia sibi discentes, adfectati regni vel artium nefandarum calumnias insontibus adfligebant.
            </p>
        </div> -->
    <!-- <div class="page-category">
            <h3 class="align-end">What kind of dev I'm not</h3>
            <p class="page-content">
                Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult,
                et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, non admodum flagitem.
                re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.
            </p>
        </div> -->
  </div>
</template>

<script>
import StackList from '~/components/StackList.vue';

export default {
  components: {
    StackList,
  }    
}
</script>


<style scoped>
.about-page {
}

.stack-list {
}

.profile-banner {
    /* padding-bottom: 10px; */
}

@media (min-width: 426px) {
    .profile-banner {
        display: flex;
    }
}

.profile-infos {
}

.page-category {
    padding-bottom: 30px;
}

.align-end {
    text-align: end;
}

.page-content {
    color: #747272;
}

img {
    margin-right: 10px;
    height: 130px;
}

h3 {
    margin-bottom: 5px;
}
</style>
