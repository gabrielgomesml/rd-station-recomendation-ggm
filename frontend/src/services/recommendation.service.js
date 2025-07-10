// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  let recommendedProducts = []
  const selectedPreferencesAndFeatures = formData.selectedFeatures.concat(formData.selectedPreferences);
  switch(formData.selectedRecommendationType){
    case 'MultipleProducts':
      products.forEach((product) => {
        let hasMatch = false;
        const productPreferencesAndFeatures = product.features.concat(product.preferences)
        for(const attribute of selectedPreferencesAndFeatures) {
          if (productPreferencesAndFeatures.includes(attribute)) {
            hasMatch = true;
            break
          }
        }
        if (hasMatch) {
          return recommendedProducts.push(product)
        }
      })
      break
    case 'SingleProduct':
      let singleProduct = {product: {}, points: 0};
      products.forEach((product) => {
        let currentProductPoints = 0;
        const productPreferencesAndFeatures = product.features.concat(product.preferences)
        for(const attribute of selectedPreferencesAndFeatures) {
          if (productPreferencesAndFeatures.includes(attribute)) {
            currentProductPoints = currentProductPoints + 1;
          }
        }
        if (currentProductPoints >= singleProduct.points) {
          singleProduct = {product, points: currentProductPoints}
          currentProductPoints = 0
        }
      })
      recommendedProducts.push(singleProduct.product)
      break
    case "BetterProduct":
      products.forEach((product) => {
        let hasMatch = true;
        const productPreferencesAndFeatures = product.features.concat(product.preferences)
        for(const attribute of selectedPreferencesAndFeatures) {
          if (!productPreferencesAndFeatures.includes(attribute)) {
            hasMatch = false;
            break
          }
        }
        if (hasMatch) {
          return recommendedProducts.push(product)
        }
      })
      break
    default:
      console.log('default')
  }
  return recommendedProducts;
};

const recommendationService = {getRecommendations};
export default recommendationService;
