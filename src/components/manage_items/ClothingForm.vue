<template>
    <form>
        <h2>Add Item</h2>
        <fieldset>
            <div class="preview-not-loaded">
                <font-awesome-icon :icon="['far','images']" />
                <span>Image Preview</span>
            </div>
        </fieldset>
        <fieldset>
            <label for="category_id">Clothing Category:</label>
            <select
                id="category_id"
                name="category_id"
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
    },
    props:{
        category: String
    },
    data(){
        return {
            category_id: "",
            image_url: "",
            clothing_type: "",
            color: "",
        }
    },
    methods:{
        getCategoryId(category){
            if(category == "bottom"){
                return 2
            } else {
                return 1
            }
        }
    },
    watch:{
        category(){
            this.category_id = this.getCategoryId(this.category)
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