const Footer = () => {
  return (
    <div className="footer bg-violet-700 text-violet-50 text-center py-10 mt-10">
      <p className="text-lg">
        &copy; {new Date().getFullYear()} Tech Alpha. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
