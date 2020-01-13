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
            <label>Clothing Category:</label>
            <select>
                <option>Top</option>
                <option>Bottom</option>
            </select>
        </fieldset>
        <fieldset>
            <label>Image Url:</label>
            <input type="text" />
        </fieldset>
        <fieldset>
            <label>Clothing Type:</label>
            <input type="text" />
        </fieldset>
        <fieldset>
            <label>Color: </label>
            <input type="text" />
        </fieldset>
        <button type="submit">Add Clothing</button>
    </form>
</template>

<script>
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