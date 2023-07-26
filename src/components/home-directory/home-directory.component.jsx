
import CategoryItem from '../category/category-item/category-item.component';
import {
  CategoryContainer,
  WebsiteFeatures,
} from './home-directory.styles'

function HomeDirectory({categories}) {

 
  return (
    <div>
      
      <WebsiteFeatures>
        <h2>Website Features</h2>
        <p>Here are the 5 feature of this web app: </p>
      </WebsiteFeatures>

      <CategoryContainer>
         {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
          ))
          }
      </CategoryContainer>

  </div>

  );
}

export default HomeDirectory;
