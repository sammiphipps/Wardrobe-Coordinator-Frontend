<template>
    <fragment>
        <fieldset class="inside-form">
            <div v-if="image_url" class="preview-image">
                <img
                    :src="image_url"
                    :alt="clothing_type"
                />
            </div>
            <div v-else class="preview-not-loaded">
                <font-awesome-icon :icon="['far','images']" />
                <span>Image Preview</span>
            </div>
        </fieldset>
        <fieldset class="inside-form">
            <label for="clothing_category">Clothing Category:</label>
            <select
                id="clothing_category"
                name="clothing_category"
                v-model.number="category_id"
            >
                <option value="" disabled>Please select a category</option>
                <option value="1">Top</option>
                <option value="2">Bottom</option>
            </select>
        </fieldset>
        <fieldset class="inside-form">
            <label for="image_url">Image Url:</label>
            <input 
                type="text" 
                id="image_url"
                name="image_url"
                v-model="image_url"
            />
        </fieldset>
        <fieldset class="inside-form">
            <label for="clothing_type">Clothing Type:</label>
            <input 
                type="text" 
                id="clothing_type"
                name="clothing_type"
                v-model="clothing_type"
            />
        </fieldset>
        <fieldset class="inside-form">
            <label for="color">Color: </label>
            <input 
                type="text" 
                id="color"
                name="color"
                v-model="color"
            />
        </fieldset>
    </fragment>
</template>

<script>
export default {
    mounted(){
        this.category_id = this.getCategoryId(this.category)

        if(this.default_values !== undefined){
            this.setData(this.default_values)
        }
    },
    props:{
        category: String,
        default_values: Object,
    },
    data(){
        return {
            category_id: "",
            image_url: "",
            clothing_type: "",
            color: ""
        }
    },
    methods:{
        getCategoryId(category){
            if(category == "bottom"){
                return 2
            } else {
                return 1
            }
        },
        setData(value){
            if(value !== undefined){
                this.category_id = this.getCategoryId(value.clothing_category.name)
                this.image_url = value.image_url
                this.clothing_type = value.clothing_type
                this.color = value.color
            } else {
                this.category_id = this.getCategoryId(this.category)
                this.image_url = ""
                this.clothing_type = ""
                this.color = ""
            }
        }
    },
    watch:{
        category(value){
            this.category_id = this.getCategoryId(value)
        },
        default_values(value){
            this.setData(value)
        }
    }
}
</script>

<style lang="scss">

        .inside-form {
            border:none; 
            margin: 0; 

            label {
                display: inline-block;
                width: 25%;
            }

            input {
                width: 70%;
            }

            select {
                box-sizing: border-box;
                width: 71%;
            }
        }

        .inside-form:first-of-type {
            align-self: center;
        }

        .preview-image img{
            background-color: transparent;
        }

        .preview-image img:hover{
            opacity: 1;
        }

        .preview-not-loaded {
            padding: 2rem;
            span {
                margin-left: 0.5rem;
            }
        }
</style>