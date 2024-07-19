function AppHeader() {
    const appheaderstyle = {
      color: 'white',
      backgroundColor: 'rgba(36, 37, 37, 1)',
      height: '50px',
      width: '1500px',
      display: 'flex',
      justifyContent: 'center', // centers horizontally
      alignItems: 'center', // centers vertically
      fontSize: '15px',
      padding: '5px',
      margin: '5px auto', // centers the div itself if needed
      borderRadius: '25px',
      fontFamily: 'Inter',
    };
  
    return (
      <div style={appheaderstyle}>
        <h1 style={{ margin: 0 }}>Welcome to the Code Editor</h1>
      </div>
    );
  }
  
  export default AppHeader;
  