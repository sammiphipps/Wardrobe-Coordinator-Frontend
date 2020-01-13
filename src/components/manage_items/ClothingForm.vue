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
            <label for="clothing_category">Clothing Category:</label>
            <select
                id="clothing_category"
                name="clothing_category"
            >
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
            />
        </fieldset>
        <fieldset>
            <label for="clothing_type">Clothing Type:</label>
            <input 
                type="text" 
                id="clothing_type"
                name="clothing_type"
            />
        </fieldset>
        <fieldset>
            <label for="color">Color: </label>
            <input 
                type="text" 
                id="color"
                name="color"
            />
        </fieldset>
        <button type="submit">Add Clothing</button>
    </form>
</template>

<script>
export default {
    props:{
        category: String
    },
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