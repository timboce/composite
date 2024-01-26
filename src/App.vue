<template>
    <!-- Main app container -->
    <div id="app">
        <!-- Navbar with brand and navigation links -->
        <nav class="navbar bg-light mb-0 p-0">
            <!-- Container for brand and navigation links -->
            <div class="container-fluid d-flex flex-column mb-0 align-items-start">
                <!-- Brand link with the app name -->
                <a href="#" class="navbar-brand mb-0 pb-0 h1">Composite Solution Próbafeladat</a>

                <!-- Navigation links container -->
                <div class="navbar p-0" id="navbarSupportedContent">
                    <!-- Navigation links -->
                    <ul class="navbar-nav me-auto mb-0 mb-lg-0 d-flex flex-row ">
                        <!-- ToDo link -->
                        <li class="nav-item p-2">
                            <router-link class="nav-link" to="/" :class="{ active: activeIndex === 0 }"
                                @click="setActive(0)">
                                ToDo
                            </router-link>
                        </li>
                        <!-- Képgaléria link -->
                        <li class="nav-item p-2">
                            <router-link class="nav-link" to="/kepgaleria" :class="{ active: activeIndex === 1 }"
                                @click="setActive(1)">Képgaléria</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Router view for displaying components based on the route -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App', // Component name
    data() {
        // Data for the index of the active navbar item
        return {
            activeIndex: 0
        };
    },
    methods: {
        // Method to change the index of the active navbar item
        setActive(index) {
            this.activeIndex = index;
        }
    }
}
</script>

<style>
/* Any global styling for the app can be added here */
</style>
