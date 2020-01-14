<template>
    <form v-on:submit="submitHandler">
        <h2>Add Item</h2>
        <fieldset>
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
        <fieldset>
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
        <fieldset>
            <label for="image_url">Image Url:</label>
            <input 
                type="text" 
                id="image_url"
                name="image_url"
                v-model="image_url"
            />
        </fieldset>
        <fieldset>
            <label for="clothing_type">Clothing Type:</label>
            <input 
                type="text" 
                id="clothing_type"
                name="clothing_type"
                v-model="clothing_type"
            />
        </fieldset>
        <fieldset>
            <label for="color">Color: </label>
            <input 
                type="text" 
                id="color"
                name="color"
                v-model="color"
            />
        </fieldset>
        <button type="submit">Add Clothing</button>
    </form>
</template>

<script>
export default {
    mounted(){
        this.category_id = this.getCategoryId(this.category)
        this.setData(this.default_values)
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
        submitHandler(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            const data = {
                image_url: formData.get('image_url'),
                clothing_type: formData.get('clothing_type'),
                color: formData.get('color'),
                clothing_category_id: formData.get('clothing_category')
            }
            event.target.reset
            this.$emit("submitHandler", data)
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
    form{
        margin-left: 2%;
        margin-top: 3%;
        height: 97%;
        width: 48%;
        display: flex;
        flex-direction: column;

        h2 {
            margin: 0.5rem 0 0.5rem 0;
        }

        fieldset {
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

        fieldset:first-of-type {
            align-self: center;
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

        button {
            width: fit-content;
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            align-self: center;
            cursor: pointer;
        }
    } 
</style>