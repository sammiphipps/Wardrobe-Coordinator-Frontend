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
                <option :value="category_info['top']">Top</option>
                <option :value="category_info['bottom']">Bottom</option>
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
        this.category_id = this.getCategoryId(this.category_selected)

        if(this.default_values !== undefined){
            this.setData(this.default_values)
        }
    },
    props:{
        category_selected: String,
        default_values: Object,
        category_info: Object
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
        getCategoryId(category_selected){
            return this.category_info[category_selected]
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
        },
    },
    watch:{
        category_selected(value){
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
                width: 9rem;
            }

            input {
                display: inline-block;
                width: 17rem;
            }

            select {
                box-sizing: border-box;
                width: 17.5rem;
            }
        }

        .inside-form:first-of-type {
            align-self: center;
        }

        .preview-image {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .preview-image > img{
            background-color: transparent;
            min-width: 9rem;
            max-width: 11rem;
            max-height: 15rem;
        }

        .preview-image > img:hover{
            opacity: 1;
        }

        .preview-not-loaded {
            padding: 2rem;
            span {
                margin-left: 0.5rem;
            }
        }
</style>