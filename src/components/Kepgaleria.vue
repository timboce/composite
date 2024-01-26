<template>
    <!-- Main container for the image gallery -->
    <div class="container">
        <!-- Title of the image gallery -->
        <h1 class="text-center my-4">
            Képgaléria
        </h1>
        <!-- Grid layout for displaying images -->
        <div class="row row-cols-3">
            <!-- Loop through photos and create a card for each -->
            <div id="card-elements" class="col" v-for="photo in photos" :key="photo.id">
                <!-- Use router-link to navigate to the Image component with the specific photo id -->
                <router-link :to="'/kepgaleria/' + photo.id">
                    <!-- Card for displaying the image -->
                    <div class="card text-bg-dark border border-1">
                        <div class="card-body p-1">
                            <!-- Display the thumbnail image -->
                            <img :src="photo.thumbnailUrl" class="card-img-top m-0" :alt="photo.title">
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Kepgaleria', // Component name
    data() {
        // Local data property to store the photos
        return {
            photos: []
        };
    },
    async mounted() {
        // Fetch photos from the API
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50');

            if (response.ok) {
                const data = await response.json();
                this.photos = data;
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            // Catch any errors and log to the console
            console.log(error);
        }
    }
}
</script>

<style scoped>
/* Scoped styling for the component */
#card-elements {
    padding: 5px !important;
}
</style>
