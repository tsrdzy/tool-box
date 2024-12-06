<template>
    <div class="about">
        <el-card class="head">
            <template #header>
                <div class="card-header">
                    <span>{{ $t('toolbox.about.statistics') }}</span>
                </div>
            </template>

        </el-card>
        <br>
    </div>
</template>
<script setup>
import { ref } from "vue";
</script>
<style lang=scss scoped>
.about {
    .el-card {

        backdrop-filter: blur(2px);
    }

    margin: 20px;

    .head {
        width: 100%;

        .el-col {
            text-align: center;
        }
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        // justify-items: center;
        gap: 10px;


        .el-card {
            margin-bottom: 20px;
            padding: 2px;
            background-color: #77777744;
            .logo {
                display: block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                box-shadow: 0 0 2px;
                border-radius: 50%;
                text-align: center;
                line-height: 50px;
                font-size: 28px;
            }



            .content {
                text-align: center;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .urls {
                display: flex;
                justify-content: space-around;

                .url {
                    border: 1px solid;
                    padding: 2px;
                    border-radius: 4px;
                    margin: 2px;

                    &:hover {
                        background-color: #77777777;
                    }
                }

                .nourl {
                    background-color: #777777bb;
                    border: 1px solid;
                    padding: 2px;
                    border-radius: 4px;
                    margin: 2px;

                }
            }
            &:hover {
                box-shadow: 0 0 5px;
            }
        }
    }

}
</style>
