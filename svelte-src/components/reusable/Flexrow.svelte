<script>
</script>

<style>
    .row {
        display: flex;
    }

    .row-wrapper:after {
        display: block;
        content: "";
        margin: 0 auto;
        width: 90%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .04);
    }

    .row-wrapper:last-of-type:after {
        box-shadow: none;
    }
</style>

<div class="row-wrapper">
    <div class="row">
        <slot></slot>
    </div>
</div>