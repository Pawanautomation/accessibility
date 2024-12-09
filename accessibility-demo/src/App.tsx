import { useState, FormEvent } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // Issue 1: Missing main landmark
    <div className="app-container">
      {/* Issue 2: Missing heading hierarchy - starts with h3 */}
      <h3 style={{ color: '#666' }}>Welcome to Our Website</h3>

      {/* Issue 3: Poor color contrast */}
      <p style={{ color: '#999' }}>
        This is an example website with accessibility issues.
      </p>

      {/* Issue 4: Non-semantic button and missing ARIA */}
      <div 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ 
          cursor: 'pointer',
          padding: '10px',
          border: '1px solid black'
        }}
      >
        Toggle Menu
      </div>

      {isMenuOpen && (
        <div style={{ marginTop: '10px' }}>
          <a style={{ color: '#999' }} href="#">Home</a>
          <a style={{ color: '#999', marginLeft: '10px' }} href="#">About</a>
          <a style={{ color: '#999', marginLeft: '10px' }} href="#">Contact</a>
        </div>
      )}

      {/* Issue 5: Form with missing labels and ARIA */}
      <div style={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={{ padding: '5px' }}
          />
          <input
            type="submit"
            value="Submit"
            style={{ 
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#ddd'
            }}
          />
        </form>
      </div>

      {/* Issue 6: Dynamic content without ARIA live */}
      {submitted && (
        <div style={{ marginTop: '10px' }}>
          Thank you for submitting!
        </div>
      )}

      {/* Issue 7: Image without alt text */}
      <img 
        src="https://via.placeholder.com/200x100"
        style={{ marginTop: '20px' }}
      />

      {/* Issue 8: Table without proper headers */}
      <table style={{ marginTop: '20px', width: '100%' }}>
        <tbody>
          <tr>
            <td>Product</td>
            <td>Price</td>
          </tr>
          <tr>
            <td>Item 1</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>$20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App