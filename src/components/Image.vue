<template>
    <!-- Modal for displaying images -->
    <div class="modal fade show d-block" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- Close button "X" -->
                    <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <!-- Image carousel with Bootstrap -->
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <!-- Loop through photos and apply the active class based on the id -->
                            <div class="carousel-item" v-for="photo in photos" :key="photo.id"
                                :class="{ active: photo.id == id }">
                                <img :src="photo.url" class="d-block w-100" :alt="photo.title">
                            </div>
                        </div>
                        <!-- Previous and Next buttons for carousel navigation -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Image', // Component name
    data() {
        // Data for the image id and photos array
        return {
            id: null,
            photos: []
        };
    },
    async mounted() {
        // Fetch photos from the API
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50');
            this.id = this.$route.params.id; // Set the id based on the route parameter

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
    },
    methods: {
        // Method to close the modal
        closeModal() {
            // Use Vue Router to navigate back to the gallery page
            this.$router.push('/kepgaleria');
        }
    }
}
</script>

<style>
.modal-content {
    background-color: rgba(0, 0, 0, 0.9) !important;
}
</style>
