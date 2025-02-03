<template>
    <IContainer>
        <div class="top">
            <h3>About</h3>
        </div>
        <IRow>
            <IColumn xs="12" lg="3">
                <div class="image-container">
                    <img src="~/assets/images/headshot.jpeg" />
                    <p>
                        <b>Evangelos Poneres</b><br>
                        License #: 4810001904<br>
                    </p>
                </div>
            </IColumn>
            <IColumn xs="12" lg="9">
                <p class="lead">
                    Originally from Baltimore, <b>Evangelos Poneres</b> moved to Chicago in 2023 to support his wife's
                    dream of being a veterinarian at the Shedd Aquarium. With a strong background in property management
                    and a lengthy career in software development, Evangelos is excited to leverage his communication,
                    critical thinking, and problem solving skills to meet your real estate needs.
                </p>
                <p class="lead">
                    Evangelos is a licensed real estate agent with Keller Williams Realty Partners in Park Ridge, IL.
                    Learn more by clicking <a
                        href="https://eponeres.kw.com/agent/evangelos-poneres/2000097201">here.</a>
                </p>
            </IColumn>
        </IRow>

    </IContainer>
</template>
<style scoped>
.image-container {
    text-align: center;
}

img {
    max-width: 238px;
    max-height: 238px;
    border-radius: 50%;
    padding: 5px;
}

.lead {
    padding: 16px;

    @media screen and (max-width: 991px) {
        margin-top: 18px;
    }
}

.lead b {
    height: 250px;
    font-weight: bold;
}
</style>
