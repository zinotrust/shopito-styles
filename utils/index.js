export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Extract id and cart quantity from cartItems
export function extractIdAndCartQuantity(products) {
  return products.map(function (product) {
    return {
      _id: product._id,
      cartQuantity: product.cartQuantity,
    };
  });
}

// Calculate average Product rating
export function calculateAverageRating(ratings) {
  if (!Array.isArray(ratings) || ratings.length === 0) {
    return 0; // Return 0 if the ratings array is empty or not an array
  }

  var totalStars = 0;
  for (var i = 0; i < ratings.length; i++) {
    var rating = ratings[i];
    if (rating.hasOwnProperty("star")) {
      totalStars += rating.star;
    }
  }

  return totalStars / ratings.length;
}

export function getCartQuantityById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === id) {
      return products[i].cartQuantity;
    }
  }
  return 0; // If the _id is not found, return 0 or any default value
}
