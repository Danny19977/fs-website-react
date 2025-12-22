import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FSNavbar from '../components/Navbar';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';
import '../styles/style.css';
import '../styles/responsive.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash, faDownload, faCopy, faLock, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    // Check if user is already authenticated in this session
    const sessionAuth = sessionStorage.getItem('fs_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadSubmissions();
    }
  }, []);

  const loadSubmissions = () => {
    // Load submissions from localStorage
    const stored = localStorage.getItem('fs_contact_submissions');
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading submissions:', e);
      }
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // IMPORTANT: Change this password to your actual password!
    // You should set this as an environment variable in production
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'freelancesolutions2024';
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('fs_admin_auth', 'true');
      setPasswordError('');
      loadSubmissions();
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const deleteSubmission = (index) => {
    const updated = submissions.filter((_, i) => i !== index);
    setSubmissions(updated);
    localStorage.setItem('fs_contact_submissions', JSON.stringify(updated));
    // Reset to first page if current page is now empty
    if (currentPage > Math.ceil(updated.length / itemsPerPage)) {
      setCurrentPage(Math.max(1, Math.ceil(updated.length / itemsPerPage)));
    }
  };

  const deleteAll = () => {
    if (window.confirm('Are you sure you want to delete all submissions?')) {
      setSubmissions([]);
      localStorage.removeItem('fs_contact_submissions');
      setCurrentPage(1);
    }
  };

  // Pagination calculations
  const totalPages = Math.ceil(submissions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSubmissions = submissions.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const downloadAsJSON = () => {
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadAsCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Message', 'Submitted At'];
    const rows = submissions.map(sub => [
      sub.user_name,
      sub.user_email,
      sub.user_phone || 'N/A',
      `"${sub.message.replace(/"/g, '""')}"`, // Escape quotes for CSV
      new Date(sub.timestamp).toLocaleString(),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Login form UI
  if (!isAuthenticated) {
    return (
      <div className="hero_area">
        <FSNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="contact_section layout_padding" style={{ minHeight: '70vh', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ maxWidth: '400px' }}>
            <div style={{
              padding: '40px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: '1px solid #ddd',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '15px',
                  color: '#4a90e2',
                }}>
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>Admin Access</h2>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Enter your password to view submissions</p>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#333',
                  }}>
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError('');
                    }}
                    placeholder="Enter admin password"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      borderColor: passwordError ? '#dc3545' : '#ddd',
                    }}
                  />
                  {passwordError && (
                    <div style={{
                      color: '#dc3545',
                      fontSize: '13px',
                      marginTop: '8px',
                      fontWeight: '500',
                    }}>
                      {passwordError}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#4a90e2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Login
                </button>
              </form>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '5px',
                fontSize: '12px',
                color: '#666',
                lineHeight: '1.6',
              }}>
                <strong>Note:</strong> This page is only accessible with the correct admin password. All contact form submissions are stored locally in your browser.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero_area">
      <FSNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="contact_section layout_padding" style={{ minHeight: '70vh', paddingTop: '100px' }}>
        <div className="container">
          <ScrollAnimatedElement>
            <div className="heading_container heading_center">
              <h2>Contact Form Submissions</h2>
              <p>View and manage all contact form submissions</p>
            </div>
          </ScrollAnimatedElement>

          <div style={{ marginTop: '40px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Back to Contact
              </button>

              {submissions.length > 0 && (
                <>
                  <button
                    onClick={downloadAsJSON}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Export JSON
                  </button>

                  <button
                    onClick={downloadAsCSV}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#17a2b8',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <FontAwesomeIcon icon={faDownload} /> Export CSV
                  </button>

                  <button
                    onClick={deleteAll}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete All
                  </button>
                </>
              )}
            </div>

            {submissions.length === 0 ? (
              <div style={{
                padding: '40px',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
              }}>
                <p style={{ fontSize: '16px', color: '#6c757d', margin: 0 }}>
                  No contact form submissions yet.
                </p>
              </div>
            ) : (
              <>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#666',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '15px',
                }}>
                  <div>
                    Total Submissions: <strong>{submissions.length}</strong>
                    {submissions.length > 0 && (
                      <span style={{ marginLeft: '15px', fontSize: '12px', color: '#999' }}>
                        Showing {startIndex + 1}-{Math.min(endIndex, submissions.length)} of {submissions.length}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '13px', color: '#666' }}>Items per page:</label>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => {
                        setItemsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                      <option value={submissions.length}>All</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '20px' }}>
                  {currentSubmissions.map((submission, pageIndex) => {
                    const actualIndex = startIndex + pageIndex;
                    return (
                    <div
                      key={actualIndex}
                      style={{
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <div>
                          <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>
                            {submission.user_name}
                          </h4>
                          <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                            {new Date(submission.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteSubmission(actualIndex)}
                          style={{
                            padding: '8px 12px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} size="sm" /> Delete
                        </button>
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <strong style={{ fontSize: '13px', color: '#333' }}>Email:</strong>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '4px',
                          padding: '8px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '4px',
                        }}>
                          <span style={{ fontSize: '14px', flex: 1 }}>{submission.user_email}</span>
                          <button
                            onClick={() => copyToClipboard(submission.user_email, `email-${actualIndex}`)}
                            style={{
                              padding: '4px 8px',
                              backgroundColor: '#4a90e2',
                              color: 'white',
                              border: 'none',
                              borderRadius: '3px',
                              cursor: 'pointer',
                              fontSize: '12px',
                            }}
                          >
                            {copiedId === `email-${actualIndex}` ? '✓ Copied' : <FontAwesomeIcon icon={faCopy} />}
                          </button>
                        </div>
                      </div>

                      {submission.user_phone && (
                        <div style={{ marginBottom: '12px' }}>
                          <strong style={{ fontSize: '13px', color: '#333' }}>Phone:</strong>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '4px',
                            padding: '8px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                          }}>
                            <span style={{ fontSize: '14px', flex: 1 }}>{submission.user_phone}</span>
                            <button
                              onClick={() => copyToClipboard(submission.user_phone, `phone-${actualIndex}`)}
                              style={{
                                padding: '4px 8px',
                                backgroundColor: '#4a90e2',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                fontSize: '12px',
                              }}
                            >
                              {copiedId === `phone-${actualIndex}` ? '✓ Copied' : <FontAwesomeIcon icon={faCopy} />}
                            </button>
                          </div>
                        </div>
                      )}

                      <div>
                        <strong style={{ fontSize: '13px', color: '#333' }}>Message:</strong>
                        <p style={{
                          marginTop: '8px',
                          padding: '12px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '4px',
                          border: '1px solid #dee2e6',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          margin: '8px 0 0 0',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}>
                          {submission.message}
                        </p>
                      </div>
                    </div>
                    );
                  })}
                </div>

                {submissions.length > itemsPerPage && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px',
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                  }}>
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      style={{
                        padding: '10px 15px',
                        backgroundColor: currentPage === 1 ? '#ccc' : '#4a90e2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} /> Previous
                    </button>

                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      minWidth: '100px',
                      textAlign: 'center',
                      color: '#333',
                    }}>
                      Page {currentPage} of {totalPages}
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      style={{
                        padding: '10px 15px',
                        backgroundColor: currentPage === totalPages ? '#ccc' : '#4a90e2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      Next <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <footer className="footer_section">
        <div className="container">
          <p>{t('© 2025 All Rights Reserved By FREELANCE SOLUTIONS', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactInfo;
