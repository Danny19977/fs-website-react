# Quick Reference Guide

## 🎯 Common Tasks

### Running the Application

```bash
# Development mode
npm start

# Production build
npm run build

# Testing
npm test
```

### Code Quality

```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting (without changes)
npm run format:check
```

### Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

---

## 📊 Analytics Events

### Track Form Submission
```javascript
import { trackFormSubmission } from './utils/analyticsUtils';

trackFormSubmission('contact_form', { 
  has_phone: true,
  message_length: 150 
});
```

### Track Button Click
```javascript
import { trackButtonClick } from './utils/analyticsUtils';

trackButtonClick('subscribe_button', 'hero_section');
```

### Track Custom Event
```javascript
import { trackEvent } from './utils/analyticsUtils';

trackEvent('user_signup', {
  plan: 'premium',
  source: 'landing_page'
});
```

---

## ✅ Form Validation

### Validate Contact Form
```javascript
import { validateContactForm } from './utils/formValidation';

const validation = validateContactForm({
  user_name: 'John Doe',
  user_email: 'john@example.com',
  user_phone: '+27633377293',
  message: 'Your message here'
});

if (!validation.isValid) {
  console.log(validation.errors);
}
```

### Single Field Validation
```javascript
import { 
  validateEmail, 
  validatePhone, 
  validateName 
} from './utils/formValidation';

validateEmail('user@example.com');    // true
validatePhone('+27633377293');        // true
validateName('John');                 // true
```

---

## 🛠️ Error Tracking

### Log Error
```javascript
import errorTracker from './utils/errorTracker';

try {
  // Some code
} catch (error) {
  errorTracker.logError(error, {
    context: 'critical_operation',
    fatal: true
  });
}
```

### Get Logged Errors
```javascript
import errorTracker from './utils/errorTracker';

const errors = errorTracker.getErrors();
console.log(errors); // Array of error objects
```

---

## 🌐 Environment Variables

### Available Variables

```env
# Analytics
REACT_APP_GA_MEASUREMENT_ID=G-6SDHCELE8C

# API Configuration
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_CONTACT_ENDPOINT=/api/contact
REACT_APP_NEWSLETTER_ENDPOINT=/api/newsletter

# Features
REACT_APP_ENABLE_PWA=true
REACT_APP_ENABLE_ERROR_TRACKING=true
REACT_APP_ENABLE_ANALYTICS=true
```

### Using Environment Variables

```javascript
// In React component
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const isPwaEnabled = process.env.REACT_APP_ENABLE_PWA === 'true';
```

---

## 📱 Mobile Testing

### Test PWA Features
1. Open DevTools (F12)
2. Go to **Application** → **Service Workers**
3. Check "Offline"
4. Refresh page - app should load from cache

### Test Responsive Design
```bash
# In DevTools, use device toolbar (Ctrl+Shift+M)
# Test on various device sizes
```

---

## 🔍 Google Analytics Dashboard

### Access Analytics
1. Go to Google Analytics 4
2. Select your property
3. Check **Real-time** for immediate events
4. Check **Events** for form submissions
5. Check **Conversions** for goal tracking

### Custom Events Created
- `form_submit` - Contact form submission
- `button_click` - CTA button interactions
- `scroll_milestone` - 25%, 50%, 75% scroll depth
- `user_engagement` - Time spent on page
- `web_vitals` - Core Web Vitals metrics
- `exception` - Unhandled errors

---

## 🎨 Accessibility Checklist

- [x] All form inputs have labels
- [x] Proper input types (email, tel, textarea)
- [x] Error messages accessible
- [x] Keyboard navigation works
- [x] ARIA attributes in place
- [x] Color contrast sufficient
- [x] Links have valid href or are buttons

### Test Accessibility
```bash
# Use axe DevTools extension
# Use Lighthouse in Chrome DevTools
# Test with keyboard (Tab, Shift+Tab, Enter)
```

---

## 🚀 Performance Optimization

### Check Bundle Size
```bash
npm run build
# Check build/static folder sizes
```

### Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- FCP (First Contentful Paint): < 1.8s
- TTFB (Time to First Byte): < 0.6s

### Test Performance
1. Run `npm run build`
2. Serve with `serve -s build`
3. Open Lighthouse in Chrome DevTools
4. Run audit and review scores

---

## 🐛 Debugging Tips

### Enable Dev Mode Logging
```bash
# Set NODE_ENV
NODE_ENV=development npm start
```

### Check Service Worker
```javascript
// In browser console
navigator.serviceWorker.getRegistrations()
```

### View Errors
```javascript
// In browser console
import errorTracker from './utils/errorTracker';
errorTracker.getErrors()
```

### Monitor Analytics
```javascript
// In browser console
window.dataLayer
```

---

## 📦 Dependencies

### Core Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.16.0
- react-i18next: ^13.2.2
- bootstrap: ^5.3.2
- axios: ^1.5.1

### Dev Dependencies
- typescript: 4.9.5
- prettier: ^3.0.0
- eslint-plugin-react-hooks: ^4.6.0

---

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Google Analytics 4 Guide](https://support.google.com/analytics)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

---

## 💡 Pro Tips

1. **Always test offline** - Check PWA functionality in DevTools
2. **Monitor analytics** - Review GA4 data weekly
3. **Run linter before commit** - `npm run lint:fix`
4. **Test on mobile** - Use Chrome device toolbar
5. **Check accessibility** - Use axe DevTools
6. **Monitor errors** - Review errorTracker logs in development
7. **Use environment variables** - Never hardcode sensitive data
8. **Keep dependencies updated** - Run `npm outdated` monthly

---

## ❓ FAQ

**Q: How do I add a new page?**
A: Create component in `src/pages/`, import in `App.js` as lazy, add route

**Q: How do I track a new event?**
A: Use `trackEvent('event_name', { key: 'value' })` from analyticsUtils

**Q: How do I add form validation?**
A: Use validators from `src/utils/formValidation.js` and display errors

**Q: How do I enable PWA offline mode?**
A: Set `REACT_APP_ENABLE_PWA=true` in `.env.local`

**Q: How do I reduce bundle size?**
A: Check chunk sizes in `build/static/js` and consider code splitting

---

**Last Updated:** December 17, 2025
