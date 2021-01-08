<script>
  
  import Router from 'svelte-spa-router'
  import {link} from 'svelte-spa-router'
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import List, {Item, Text, Separator, Subheader} from '@smui/list';
  import Button, {Label, Icon} from '@smui/button';  
  import TopAppBar, {Row, Section} from '@smui/top-app-bar';  
  

//   const routes = {
//     '/recipes/:type?': RecipeList,    
//     '/recipe/edit/:recipeId?':RecipeEdit,    
//     '/recipe/view/:recipeId':RecipeView,   
//     '/import/:data':Import,
//     '/': RecipeList,
//     '*':NotFound

// }

let drawer;
let drawerOpen = false;
let satus = true;

    import { onMount } from 'svelte';

    onMount(async () => {
      window.addEventListener('online', onOnLine);
      window.addEventListener('offline', onOffLine);
        });


function toggleDrawer() {
  drawerOpen = ! drawerOpen;
}

function toggleAndMove(to) {
  toggleDrawer(); 
  push(to);
}

let prominent = false;
  let dense = false;
  let secondaryColor = false;

    

</script>


<TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>
  <Row>    
    <Section  toolbar>
      <span >Svelte PWA template</span>
    </Section>    
  </Row>
</TopAppBar>

<Scrim />
<AppContent>
<p>here stands your PWA content</p>
  <!-- <Router {routes}/> -->
</AppContent>




