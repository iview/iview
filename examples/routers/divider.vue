<template>
  <Row :gutter="16">
    <Col span="12">
    <Card title="horizontal divider">
      <div>
         <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

        <Divider />

          <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

        <Divider>iView </Divider>

         <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

        <Divider dashed />

        <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

        <Divider orientation="left">iView</Divider>

        <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

        <Divider orientation="right">iView</Divider>

         <p>iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js. 
          iView is a set of UI components and widgets built on Vue.js.</p>

      </div>
    </Card>
    </Col>
    <Col span="12">
    <Card title="vertical divider">
      <div>
        iView
        <Divider type="vertical divider" />
        <a href="#">Components</a>
        <Divider type="vertical" />
        <a href="#">Divider</a>
      </div>
    </Card>
    </Col>
  </Row>
</template>

<script>
export default {

}
</script>

<style>

</style>
