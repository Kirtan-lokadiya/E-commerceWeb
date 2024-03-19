import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignUp = React.lazy(() => import("pages/SignUp"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const PhoneVerification = React.lazy(() => import("pages/PhoneVerification"));
const PasswordStrength = React.lazy(() => import("pages/PasswordStrength"));
const ZIPCodeSearch = React.lazy(() => import("pages/ZIPCodeSearch"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const StoreCredits = React.lazy(() => import("pages/StoreCredits"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const HelpCenter = React.lazy(() => import("pages/HelpCenter"));
const ShippingChargeCalculator = React.lazy(
  () => import("pages/ShippingChargeCalculator"),
);
const ShippingAddressValidation = React.lazy(
  () => import("pages/ShippingAddressValidation"),
);
const ProductQuickview = React.lazy(() => import("pages/ProductQuickview"));
const ReorderPurchase = React.lazy(() => import("pages/ReorderPurchase"));
const Print = React.lazy(() => import("pages/Print"));
const RefundManagement = React.lazy(() => import("pages/RefundManagement"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const PushNotifications = React.lazy(() => import("pages/PushNotifications"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const FreeCredits = React.lazy(() => import("pages/FreeCredits"));
const Payments = React.lazy(() => import("pages/Payments"));
const QRCode = React.lazy(() => import("pages/QRCode"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const Favourites = React.lazy(() => import("pages/Favourites"));
const DiscountsOffers = React.lazy(() => import("pages/DiscountsOffers"));
const Orderdetailview = React.lazy(() => import("pages/Orderdetailview"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const CouponCodeGenerator = React.lazy(
  () => import("pages/CouponCodeGenerator"),
);
const AuctionBIdding = React.lazy(() => import("pages/AuctionBIdding"));
const OrderTracking = React.lazy(() => import("pages/OrderTracking"));
const AffiliateURL = React.lazy(() => import("pages/AffiliateURL"));
const ItemAvailability = React.lazy(() => import("pages/ItemAvailability"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/asdf" element={<Home />} />
          <Route path="/" element={<AffiliateURL />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/itemavailability" element={<ItemAvailability />} />
          <Route path="/affiliateurl" element={<AffiliateURL />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/auctionbidding" element={<AuctionBIdding />} />
          <Route
            path="/couponcodegenerator"
            element={<CouponCodeGenerator />}
          />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orderdetailview" element={<Orderdetailview />} />
          <Route path="/discountsoffers" element={<DiscountsOffers />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/freecredits" element={<FreeCredits />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/pushnotifications" element={<PushNotifications />} />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/refundmanagement" element={<RefundManagement />} />
          <Route path="/print" element={<Print />} />
          <Route path="/reorderpurchase" element={<ReorderPurchase />} />
          <Route path="/productquickview" element={<ProductQuickview />} />
          <Route
            path="/shippingaddressvalidation"
            element={<ShippingAddressValidation />}
          />
          <Route
            path="/shippingchargecalculator"
            element={<ShippingChargeCalculator />}
          />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/storecredits" element={<StoreCredits />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/zipcodesearch" element={<ZIPCodeSearch />} />
          <Route path="/passwordstrength" element={<PasswordStrength />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
