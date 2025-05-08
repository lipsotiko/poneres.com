<template>
    <IContainer>
        <div class="top">
            <h3>About</h3>
        </div>
        <IRow>
            <IColumn xs="12" lg="4">
                <div class="image-container">
                    <img src="~/assets/images/headshot.jpeg" />
                    <p>
                        <b>Evangelos Poneres</b><br>
                        REALTOR&reg;<br>
                        License #: 475.214381
                    </p>
                </div>
            </IColumn>
            <IColumn xs="12" lg="8">
                <div>
                    <p class="lead">
                        Originally from Baltimore, <b>Evangelos Poneres</b> moved to Chicago in 2023 to support his
                        wife&apos;s dream of becoming a veterinarian at the Shedd Aquarium. With a solid foundation in
                        property management and years of experience in software development, Evangelos brings a unique
                        set of skills to the real estate industry.
                    </p>
                    <p class="lead">
                        As a licensed agent with <b>
                            <a href="https://eponeres.kw.com/" target="_blank">
                                Keller Williams Realty Partners
                            </a>
                        </b> in Park Ridge, IL, Evangelos is passionate about helping clients navigate the complexities
                        of the real estate market. He focuses on transparent communication, strategic problem-solving,
                        and meticulous attention to detail, ensuring exceptional service throughout every stage of the
                        buying and selling process. Whether you&apos;re a first-time home-buyer, an experienced
                        investor, or simply looking for a change, Evangelos is excited to leverage his skills and
                        personalized approach to help you achieve your real estate goals.
                    </p>
                    <p class="lead">
                        If you're looking for a dedicated and reliable partner in your real estate journey, click
                        <b><a href="/contact" color="dark">here</a></b> to schedule a consultation
                        today.
                    </p>
                </div>
            </IColumn>
        </IRow>
    </IContainer>
</template>
<style scoped>
a {
    color: black;
}

.image-container {
    text-align: center;
}

img {
    max-width: 268px;
    max-height: 268px;
    border-radius: 50%;
    padding: 5px;
}

.lead {
    padding: 8px;
    margin-bottom: 0;

    @media screen and (max-width: 991px) {
        margin-top: 18px;
    }
}

.lead b {
    height: 250px;
    font-weight: bold;
}

.contact-me {
    display: flex;
    justify-content: center;
}
</style>
