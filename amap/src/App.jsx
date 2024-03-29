import "./App.css";

import { Routes, Route } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage";
import GrowersPage from "./pages/GrowersPage";
import HomePage from "./pages/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import GrowerDetailsPage from "./pages/GrowerDetailsPage";
import GrowerCartPage from "./pages/GrowerCartPage";
import FormRecipePage from "./pages/FormRecipePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import SignOut from "./components/Signout/SignOut";
import ProfileGrowerPage from "./pages/ProfileGrowerPage";
import FormRecipeEditPage from "./pages/FormRecipeEditPage";
import FormCartPage from "./pages/FormCartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      <Route path="/recipe/create" element={<FormRecipePage />} />
      <Route path="/recipe/edit/:id" element={<FormRecipeEditPage />} />
      <Route path="/growers" element={<GrowersPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signout" element={<SignOut />} />
      <Route path="/profile/:id" element={<ProfileUserPage />} />
      <Route path="/profileGrower/:id" element={<ProfileGrowerPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/growers/:id" element={<GrowerDetailsPage />} />
      <Route path="/growers/:id/cart/:idcart" element={<GrowerCartPage />} />
      <Route path="/growers/cart/create" element={<FormCartPage />} />
    </Routes>
  );
}

export default App;
