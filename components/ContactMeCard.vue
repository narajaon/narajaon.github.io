<template>
    <div class="contact-me">
        <h1 style="margin-bottom: 15px">Like what you see ? 😎</h1>
        <div class="contacts">
            <span>N'hésite pas à me laisser tes coordonnées</span>
            <input
                type="email"
                placeholder="Email"
                autocomplete="on"
                class="email"
            />
        </div>
        <div>
            <span>Un commentaire ?</span>
            <textarea
                type="text"
                maxlength="150"
                placeholder="J'adore ton site Fabien !"
                class="comment"
            />
        </div>
        <div class="social-links">
            <span>Tu peux aussi me retrouver sur</span>
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
.email {
    width: 60%;
}

.comment {
    width: 100%;
}

.contact-me {
    width: 80vw;
}

@media (min-width: 425px) {
    .contact-me {
        max-width: 400px;
    }
}

.contact-me>div {
    margin-bottom: 15px;
}

.contact-me>div:last-child {
    margin-bottom: 0;
}

.social-links {
    text-align: center;
}

.social-bar {
    font-size: 25px;
}

h2 {
    margin-bottom: 10px;
}

input, textarea {
    padding: 3px;
    font-size: 15px;
    margin-top: 5px;
}

textarea {
    height: 100px;
    resize: none;
}

input:focus, textarea:focus {
    outline: none;
}
</style>