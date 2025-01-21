function Button() {
    const goToPage = () => {
      window.location.href = "/Home"; 
    };
  
    return (
      <button onClick={goToPage} className="bg-blue-500 text-white p-2 rounded">
        انتقل إلى الصفحة الثانية
      </button>
    );
  }
  
  export default Button;
  