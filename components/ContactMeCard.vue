<template>
    <div class="contact-me">
        <div class="contacts">
            <h2>N'hésite pas à me laisser<br>tes coordonnées :</h2>
            <input type="email" placeholder="Email">
        </div>
        <div class="social-links">
            <h2>Tu peux aussi me retrouver sur :</h2>
            <social-bar/>
        </div>
    </div>
</template>

<script>
import SocialBar from '~/components/SocialBar';
export default {
    components: {
        SocialBar,
    }
}
</script>


<style scoped>
.contact-me {
    background-color: white;
    padding: 30px;
}

.contact-me>div {
    margin-bottom: 30px;
}

.contact-me>div:last-child {
    margin-bottom: 0;
}

.social-bar {
    font-size: 25px;
}

h2 {
    margin-bottom: 10px;
}

input {
    padding: 3px;
}

input:focus {
    outline: none;
}
</style>