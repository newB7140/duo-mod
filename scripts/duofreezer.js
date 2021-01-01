const rotateBlock = extend(DrawMixer, {
    draw(entity){ 
        const rotation = entity.block.rotate ? entity.rotdeg() : 4;
    },
    load(block){ 
        this.rotator = Core.atlas.find(block.name + "-rotator");
    },
    icons(block){ 
        return [ 
            this.rotator
        ];
    }
});

const duofreezer = extendContent(ItemTurret, "duofreezer", {});
duofreezer.drawer = rotateBlock;