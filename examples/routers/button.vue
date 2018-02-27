<template>
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <br><br>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">Search</Button>
        <Button type="primary" shape="circle" icon="ios-search">Search</Button>
        <Button type="primary" shape="circle">Circle</Button>
        <br><br>
        <Button type="ghost" shape="circle" icon="ios-search"></Button>
        <Button type="ghost" icon="ios-search">Search</Button>
        <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
        <Button type="ghost" shape="circle">Circle</Button>
        <br><br>
        <Button>Default</Button>
        <Button disabled>Default(Disabled)</Button>
        <br>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(Disabled)</Button>
        <br>
        <Button type="ghost">Ghost</Button>
        <Button type="ghost" disabled>Ghost(Disabled)</Button>
        <br>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(Disabled)</Button>
        <br>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text(Disabled)</Button>
        <br><br>

        <br><br>
        <h4>基本</h4>
        <br><br>
        <Button-group>
            <Button>取消</Button>
            <Button type="primary">确定</Button>
        </Button-group>
        <Button-group>
            <Button disabled>昨日</Button>
            <Button disabled>今日</Button>
            <Button disabled>明日</Button>
        </Button-group>
        <Button-group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="ghost">M</Button>
            <Button type="dashed">R</Button>
        </Button-group>
        <br><br>
        <h4>配合图标</h4>
        <br><br>
        <Button-group>
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                前进
            </Button>
            <Button type="primary">
                后退
                <Icon type="chevron-right"></Icon>
            </Button>
        </Button-group>
        <Button-group>
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
        </Button-group>
        <Button-group>
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
        </Button-group>
        <br><br>
        <h4>圆角</h4>
        <br><br>
        <Button-group shape="circle">
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                前进
            </Button>
            <Button type="primary">
                后退
                <Icon type="chevron-right"></Icon>
            </Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="primary" icon="ios-skipbackward"></Button>
            <Button type="primary" icon="ios-skipforward"></Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="ghost" icon="ios-color-wand-outline"></Button>
            <Button type="ghost" icon="ios-sunny-outline"></Button>
            <Button type="ghost" icon="ios-crop"></Button>
            <Button type="ghost" icon="ios-color-filter-outline"></Button>
        </Button-group>
        <br><br>
        <h4>尺寸</h4>
        <br><br>
        <Button-group size="large">
            <Button type="ghost">Large</Button>
            <Button type="ghost">Large</Button>
        </Button-group>
        <Button-group>
            <Button type="ghost">Default</Button>
            <Button type="ghost">Default</Button>
        </Button-group>
        <Button-group size="small">
            <Button type="ghost">Small</Button>
            <Button type="ghost">Small</Button>
        </Button-group>
        <br><br>
        <Button-group size="large" shape="circle">
            <Button type="ghost">Large</Button>
            <Button type="ghost">Large</Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="ghost">Default</Button>
            <Button type="ghost">Default</Button>
        </Button-group>
        <Button-group size="small" shape="circle">
            <Button type="ghost">Small</Button>
            <Button type="ghost">Small</Button>
        </Button-group>
    </div>
</template>
<script>
    export default {

    }
</script>
