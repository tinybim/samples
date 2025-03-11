<script lang="ts" setup>

import {  DefaultUrlResolver, FilteredElementCollector, ModelViewType, SelectionMode, StoreyFilter, TinyApp, type IModel, type UIView } from 'tinybim';
import { onBeforeUnmount, onMounted, ref } from 'vue';

let app:TinyApp;
let view:UIView;
let model:IModel;
const dom=ref<HTMLDivElement>();
onMounted(async ()=>{
    if(!app){
        //初始化
        app = new TinyApp({recordable:true});
        const div = dom.value as HTMLDivElement;
        await app.init(div);

        //获取默认窗口
        view = app.default_view;
        //创建模型对象
        model = app.create_model();
        //加载模型
        await model.load(new DefaultUrlResolver("/rac_basic_sample_project/"));
        //获取模型中的3d视图
        const mv = model.views.find(v=>v.type == ModelViewType.ThreeD);
        if(mv){
            //将视图加载到窗口中（可以加载多个视图）
            view.attach_view(mv);
            //激活窗口（为激活的视图，不会更新显示模型变化）
            view.active();
            view.selection.selection_mode = SelectionMode.element;
            view.selection.add_selection_action((r)=>{
                console.log(r);
            });            
        }        
    }
});
onBeforeUnmount(()=>{
    app?.dispose();
});
const storye_filter=()=>{
    const storey = model.storeys[0];
    if(!storey){
        return;
    }
    view.show_all();
    const filter = new StoreyFilter(model,storey.id);
    const collector =new FilteredElementCollector(model);
    collector.pass(filter);
    const ids = new Uint32Array(collector.get_elements());
    const map = new Map<IModel, Uint32Array | number[]>();
    map.set(model,ids)
    view.isolate(map);
}

</script>
<template>
    <div ref="dom" style="width: 100%;height: 100%;"></div>
    <div style="position:fixed; top: 20px; left: 250px;">
        <button @click="storye_filter">楼层</button>

    </div>
</template>