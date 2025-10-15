import React from 'react';
import ScrollAnimatedElement from '../components/ScrollAnimatedElement';

const AnimationExamples = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Scroll Animation Examples
      </h1>

      {/* Basic Fade Up Animation */}
      <ScrollAnimatedElement animation="fade-up" delay={0}>
        <h2>Fade Up Animation</h2>
        <p>
          This paragraph will fade up smoothly as it enters the viewport. 
          The animation uses the Intersection Observer API for optimal performance 
          and smooth scrolling experience.
        </p>
      </ScrollAnimatedElement>

      {/* Image with Slide In Animation */}
      <ScrollAnimatedElement 
        animation="slide-in-left" 
        delay={100}
        className="scroll-animated-element--image"
      >
        <img 
          src="https://picsum.photos/600/300" 
          alt="Example animated image"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            margin: '2rem 0'
          }}
        />
      </ScrollAnimatedElement>

      {/* Multiple staggered elements */}
      <ScrollAnimatedElement animation="fade-up" delay={0}>
        <h3>Staggered Animations</h3>
      </ScrollAnimatedElement>

      <ScrollAnimatedElement 
        animation="fade-up" 
        className="scroll-animated-element--stagger-1"
      >
        <p>First paragraph with staggered delay...</p>
      </ScrollAnimatedElement>

      <ScrollAnimatedElement 
        animation="fade-up" 
        className="scroll-animated-element--stagger-2"
      >
        <p>Second paragraph with longer delay...</p>
      </ScrollAnimatedElement>

      <ScrollAnimatedElement 
        animation="fade-up" 
        className="scroll-animated-element--stagger-3"
      >
        <p>Third paragraph with even longer delay...</p>
      </ScrollAnimatedElement>

      {/* Scale up animation for cards */}
      <ScrollAnimatedElement 
        animation="scale-up" 
        delay={200}
        className="scroll-animated-element--card"
        style={{ padding: '2rem', margin: '2rem 0' }}
      >
        <h4>Card with Scale Animation</h4>
        <p>
          This card scales up as it enters the viewport, creating a nice 
          zoom-in effect that draws attention to the content.
        </p>
      </ScrollAnimatedElement>

      {/* Slide in from right */}
      <ScrollAnimatedElement animation="slide-in-right" delay={150}>
        <blockquote style={{
          borderLeft: '4px solid #007bff',
          paddingLeft: '1rem',
          fontStyle: 'italic',
          margin: '2rem 0'
        }}>
          "This quote slides in from the right side of the screen with a smooth 
          animation that captures the reader's attention."
        </blockquote>
      </ScrollAnimatedElement>

      {/* Flip animation */}
      <ScrollAnimatedElement animation="flip-up" delay={100}>
        <div style={{
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          margin: '2rem 0'
        }}>
          <h4>Flip Up Animation</h4>
          <p>This element flips up with a 3D perspective effect!</p>
        </div>
      </ScrollAnimatedElement>

      {/* Repeating animation (once=false) */}
      <ScrollAnimatedElement 
        animation="zoom-in" 
        once={false}
        threshold={0.3}
      >
        <div style={{
          background: '#f8f9fa',
          border: '2px dashed #6c757d',
          padding: '2rem',
          textAlign: 'center',
          margin: '2rem 0'
        }}>
          <h4>Repeating Animation</h4>
          <p>
            This element will animate every time it enters the viewport! 
            Scroll up and down to see it repeat.
          </p>
        </div>
      </ScrollAnimatedElement>

      {/* Final section with multiple elements */}
      <ScrollAnimatedElement animation="fade-in" delay={0}>
        <h3>Performance Features</h3>
      </ScrollAnimatedElement>

      <ScrollAnimatedElement animation="fade-up" delay={100}>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Uses Intersection Observer API for optimal performance</li>
          <li>Hardware acceleration with CSS transforms</li>
          <li>Respects user's motion preferences</li>
          <li>Optimized for mobile devices</li>
          <li>Minimal JavaScript footprint</li>
        </ul>
      </ScrollAnimatedElement>

      {/* Add some spacing to demonstrate scrolling */}
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollAnimatedElement animation="fade-up">
          <h2 style={{ textAlign: 'center' }}>
            Keep scrolling to see more animations!
          </h2>
        </ScrollAnimatedElement>
      </div>

    </div>
  );
};

export default AnimationExamples;