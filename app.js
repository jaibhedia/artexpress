// ArtExpress: Cultural Odyssey on Rails - Interactive Application

// Application Data
const appData = {
  "luxury_trains": [
    {"train_name": "Maharajas Express", "route_code": "MEXP001", "journey_name": "Heritage of India", "duration_days": 7, "max_passengers": 88, "launch_year": 2010, "sustainability_score": 8.5, "ai_personalization": true, "real_time_tracking": true},
    {"train_name": "Palace on Wheels", "route_code": "POW001", "journey_name": "Royal Rajasthan", "duration_days": 8, "max_passengers": 104, "launch_year": 1982, "sustainability_score": 7.8, "ai_personalization": true, "real_time_tracking": true},
    {"train_name": "Deccan Odyssey", "route_code": "DOD001", "journey_name": "Maharashtra Splendor", "duration_days": 8, "max_passengers": 88, "launch_year": 2004, "sustainability_score": 8.2, "ai_personalization": true, "real_time_tracking": true},
    {"train_name": "Golden Chariot", "route_code": "GC001", "journey_name": "Pride of the South", "duration_days": 7, "max_passengers": 84, "launch_year": 2006, "sustainability_score": 8.7, "ai_personalization": true, "real_time_tracking": true}
  ],
  "art_forms": [
    {"art_form": "Warli", "origin_state": "Maharashtra", "gi_tag_year": 2011, "gi_registration": "GI-2011-0001", "cultural_significance": 9.5, "commercial_value": 8.2, "authenticity_score": 9.8, "blockchain_verified": true, "artist_communities": 450, "annual_revenue_crores": 12.5, "workshop_availability": true, "digital_twin_ready": true},
    {"art_form": "Madhubani", "origin_state": "Bihar", "gi_tag_year": 2007, "gi_registration": "GI-2007-0012", "cultural_significance": 9.7, "commercial_value": 8.9, "authenticity_score": 9.6, "blockchain_verified": true, "artist_communities": 650, "annual_revenue_crores": 18.3, "workshop_availability": true, "digital_twin_ready": true},
    {"art_form": "Patachitra", "origin_state": "Odisha", "gi_tag_year": 2008, "gi_registration": "GI-2008-0089", "cultural_significance": 9.4, "commercial_value": 7.8, "authenticity_score": 9.7, "blockchain_verified": true, "artist_communities": 320, "annual_revenue_crores": 8.7, "workshop_availability": true, "digital_twin_ready": true},
    {"art_form": "Blue Pottery", "origin_state": "Rajasthan", "gi_tag_year": 2014, "gi_registration": "GI-2014-0156", "cultural_significance": 8.8, "commercial_value": 9.1, "authenticity_score": 9.3, "blockchain_verified": true, "artist_communities": 180, "annual_revenue_crores": 15.2, "workshop_availability": true, "digital_twin_ready": true},
    {"art_form": "Kalamkari", "origin_state": "Andhra Pradesh", "gi_tag_year": 2007, "gi_registration": "GI-2007-0045", "cultural_significance": 9.2, "commercial_value": 8.6, "authenticity_score": 9.5, "blockchain_verified": true, "artist_communities": 420, "annual_revenue_crores": 11.8, "workshop_availability": true, "digital_twin_ready": true}
  ],
  "user_achievements": [
    {"name": "Art Explorer", "description": "Discovered 5 traditional art forms", "points": 500, "icon": "🎨"},
    {"name": "Heritage Guardian", "description": "Completed cultural heritage quiz", "points": 300, "icon": "🏛️"},
    {"name": "Sustainability Champion", "description": "Chose eco-friendly travel options", "points": 400, "icon": "🌱"},
    {"name": "Digital Twin Master", "description": "Explored all virtual experiences", "points": 600, "icon": "🎮"},
    {"name": "Artisan Connector", "description": "Connected with 3 local artisans", "points": 350, "icon": "🤝"}
  ],
  "analytics_sample": [
    {"date": "2025-05-31", "train_name": "Maharajas Express", "station": "Mumbai", "visitor_count": 899, "cultural_engagement_score": 8.93, "sentiment_score": 0.85, "air_quality_index": 132, "temperature_celsius": 28, "social_media_mentions": 49, "ar_interactions": 23, "gamification_points": 79},
    {"date": "2025-05-31", "train_name": "Maharajas Express", "station": "Ajanta", "visitor_count": 904, "cultural_engagement_score": 9.01, "sentiment_score": 0.69, "air_quality_index": 91, "temperature_celsius": 33, "social_media_mentions": 44, "ar_interactions": 32, "gamification_points": 112},
    {"date": "2025-05-31", "train_name": "Maharajas Express", "station": "Udaipur", "visitor_count": 741, "cultural_engagement_score": 8.99, "sentiment_score": 0.76, "air_quality_index": 58, "temperature_celsius": 19, "social_media_mentions": 54, "ar_interactions": 22, "gamification_points": 92}
  ]
};

// Application State
let currentCulturalDNA = null;
let currentProfilerStep = 1;
let userPreferences = {
  interests: [],
  travelStyle: '',
  learningStyle: ''
};
let userPoints = 1247;
let userLevel = 7;
let earnedAchievements = ['Art Explorer', 'Heritage Guardian'];
let visitedTours = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize Application
function initializeApp() {
  setupThemeToggle();
  setupNavigation();
  renderTrainRecommendations();
  renderDashboard();
  renderAchievements();
  renderArtisanMarketplace();
  setupRealTimeUpdates();
  setupHeroAnimations();
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Initialize Cultural DNA button functionality
  const culturalDNAButton = document.querySelector('.hero__cta');
  if (culturalDNAButton) {
    culturalDNAButton.addEventListener('click', startCulturalProfiling);
  }

  // Initialize Explore Journeys button
  const exploreButton = document.querySelector('.hero__explore');
  if (exploreButton) {
    exploreButton.addEventListener('click', () => scrollToSection('ai-planner'));
  }
}

// Setup Hero Animations
function setupHeroAnimations() {
  // Ensure cultural badges are visible and animated
  const badges = document.querySelectorAll('.badge');
  badges.forEach((badge, index) => {
    badge.style.display = 'block';
    badge.style.animationDelay = `${index * 0.5}s`;
  });

  // Ensure train animation is visible
  const train = document.querySelector('.train');
  if (train) {
    train.style.display = 'block';
  }

  // Add extra animations to enhance the hero section
  setTimeout(() => {
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }
  }, 500);
}

// Theme Toggle Functionality
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-color-scheme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}

// Navigation Setup
function setupNavigation() {
  // Add scroll effect to navigation
  let lastScrollTop = 0;
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });
}

// Cultural DNA Profiling System
function startCulturalProfiling() {
  const modal = document.getElementById('cultural-dna-modal');
  if (modal) {
    modal.classList.add('active');
    currentProfilerStep = 1;
    showProfilerStep(1);
  }
}

function closeCulturalProfiling() {
  const modal = document.getElementById('cultural-dna-modal');
  if (modal) {
    modal.classList.remove('active');
    resetProfiler();
  }
}

function resetProfiler() {
  currentProfilerStep = 1;
  userPreferences = { interests: [], travelStyle: '', learningStyle: '' };
  document.querySelectorAll('.profiler-step').forEach(step => step.classList.add('hidden'));
  const step1 = document.getElementById('step-1');
  if (step1) step1.classList.remove('hidden');
  
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const generateBtn = document.getElementById('generate-dna');
  
  if (prevBtn) prevBtn.style.display = 'none';
  if (nextBtn) nextBtn.classList.remove('hidden');
  if (generateBtn) generateBtn.classList.add('hidden');
}

function showProfilerStep(stepNum) {
  document.querySelectorAll('.profiler-step').forEach(step => step.classList.add('hidden'));
  const currentStep = document.getElementById(`step-${stepNum}`);
  if (currentStep) currentStep.classList.remove('hidden');
  
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const generateBtn = document.getElementById('generate-dna');
  
  if (prevBtn) prevBtn.style.display = stepNum > 1 ? 'block' : 'none';
  
  if (stepNum === 3) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (generateBtn) generateBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (generateBtn) generateBtn.classList.add('hidden');
  }
}

function nextStep() {
  if (currentProfilerStep === 1) {
    // Collect interests
    const checkedInterests = document.querySelectorAll('input[name="preference"]:checked');
    userPreferences.interests = Array.from(checkedInterests).map(input => input.value);
  } else if (currentProfilerStep === 2) {
    // Collect travel style
    const travelStyle = document.querySelector('input[name="travel-style"]:checked');
    userPreferences.travelStyle = travelStyle ? travelStyle.value : '';
  }
  
  currentProfilerStep++;
  showProfilerStep(currentProfilerStep);
}

function previousStep() {
  currentProfilerStep--;
  showProfilerStep(currentProfilerStep);
}

function generateCulturalDNA() {
  // Collect learning preference
  const learningStyle = document.querySelector('input[name="learning"]:checked');
  userPreferences.learningStyle = learningStyle ? learningStyle.value : '';
  
  // Generate Cultural DNA based on preferences
  currentCulturalDNA = {
    id: 'DNA_' + Date.now(),
    interests: userPreferences.interests,
    travelStyle: userPreferences.travelStyle,
    learningStyle: userPreferences.learningStyle,
    compatibility: calculateCompatibilityScores(),
    generated: new Date().toISOString()
  };
  
  // Update DNA display
  updateCulturalDNADisplay();
  
  // Close modal and scroll to AI planner
  closeCulturalProfiling();
  setTimeout(() => scrollToSection('ai-planner'), 500);
  
  // Refresh train recommendations
  renderTrainRecommendations();
  
  // Award points for completing DNA
  awardPoints(100, 'Cultural DNA Created!');
}

function calculateCompatibilityScores() {
  return appData.luxury_trains.map(train => {
    let score = Math.random() * 0.3 + 0.7; // Base score 70-100%
    
    // Adjust based on preferences
    if (userPreferences.travelStyle === 'luxury') score += 0.1;
    if (userPreferences.travelStyle === 'eco-friendly' && train.sustainability_score > 8) score += 0.15;
    if (userPreferences.interests.includes('traditional-art')) score += 0.1;
    
    return {
      train_name: train.train_name,
      compatibility: Math.min(score, 1.0)
    };
  });
}

function updateCulturalDNADisplay() {
  const display = document.getElementById('cultural-dna-display');
  if (display && currentCulturalDNA) {
    display.innerHTML = `
      <div class="dna-strand">
        <span class="dna-base" title="Interests">${getInterestIcon()}</span>
        <span class="dna-base" title="Travel Style">${getTravelStyleIcon()}</span>
        <span class="dna-base" title="Learning Style">${getLearningStyleIcon()}</span>
        <span class="dna-base" title="Cultural Match">🧬</span>
      </div>
      <p><strong>Your Cultural DNA Profile:</strong> ${getDNADescription()}</p>
      <div class="dna-stats">
        <small>Generated: ${new Date(currentCulturalDNA.generated).toLocaleDateString()}</small>
      </div>
    `;
  }
}

function getInterestIcon() {
  if (!currentCulturalDNA) return '🌟';
  const interests = currentCulturalDNA.interests;
  if (interests.includes('traditional-art')) return '🎨';
  if (interests.includes('music-dance')) return '🎭';
  if (interests.includes('handicrafts')) return '🏺';
  if (interests.includes('history')) return '🏛️';
  return '🌟';
}

function getTravelStyleIcon() {
  if (!currentCulturalDNA) return '🚂';
  switch (currentCulturalDNA.travelStyle) {
    case 'luxury': return '👑';
    case 'eco-friendly': return '🌱';
    case 'immersive': return '🤝';
    default: return '🚂';
  }
}

function getLearningStyleIcon() {
  if (!currentCulturalDNA) return '📚';
  switch (currentCulturalDNA.learningStyle) {
    case 'hands-on': return '✋';
    case 'virtual': return '🥽';
    case 'guided': return '👨‍🏫';
    default: return '📚';
  }
}

function getDNADescription() {
  if (!currentCulturalDNA) return 'Complete your profiling to see description';
  const interests = currentCulturalDNA.interests.join(', ') || 'general cultural';
  return `${currentCulturalDNA.travelStyle || 'flexible'} traveler interested in ${interests} experiences, prefers ${currentCulturalDNA.learningStyle || 'varied'} learning`;
}

// Train Recommendations System
function renderTrainRecommendations() {
  const trainsGrid = document.getElementById('trains-grid');
  if (!trainsGrid) return;
  
  let trains = [...appData.luxury_trains];
  
  // Sort by compatibility if DNA exists
  if (currentCulturalDNA && currentCulturalDNA.compatibility) {
    trains.sort((a, b) => {
      const aCompat = currentCulturalDNA.compatibility.find(c => c.train_name === a.train_name)?.compatibility || 0;
      const bCompat = currentCulturalDNA.compatibility.find(c => c.train_name === b.train_name)?.compatibility || 0;
      return bCompat - aCompat;
    });
  }
  
  trainsGrid.innerHTML = trains.map(train => {
    const compatibility = currentCulturalDNA 
      ? currentCulturalDNA.compatibility.find(c => c.train_name === train.train_name)?.compatibility 
      : null;
    
    return `
      <div class="card train-card">
        <div class="train-card__header">
          <h3>${train.train_name}</h3>
          <p>${train.journey_name}</p>
          ${compatibility ? `<div class="compatibility-score">🧬 ${Math.round(compatibility * 100)}% Match</div>` : ''}
        </div>
        <div class="card__body train-card__body">
          <div class="train-features">
            <div class="feature">
              <span>📅</span>
              <span>${train.duration_days} Days</span>
            </div>
            <div class="feature">
              <span>👥</span>
              <span>${train.max_passengers} Passengers</span>
            </div>
            <div class="feature">
              <span>🤖</span>
              <span>AI Personalized</span>
            </div>
            <div class="feature">
              <span>📍</span>
              <span>Real-time Tracking</span>
            </div>
          </div>
          <div class="sustainability-score">
            🌱 Sustainability Score: ${train.sustainability_score}/10
          </div>
          <div style="margin-top: 16px; display: flex; gap: 8px;">
            <button class="btn btn--primary" onclick="viewTrainDetails('${train.train_name}')">
              View Journey
            </button>
            <button class="btn btn--outline" onclick="enterVirtualTour('${train.route_code}')">
              🥽 Virtual Tour
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function viewTrainDetails(trainName) {
  showNotification(`Opening detailed journey information for ${trainName}...`, 'info');
  awardPoints(25, 'Journey Explorer!');
}

// Dashboard and Analytics
function renderDashboard() {
  renderCurrentMetrics();
  // Delay chart rendering to ensure DOM is ready
  setTimeout(() => {
    renderVisitorChart();
    renderEngagementChart();
  }, 100);
}

function renderCurrentMetrics() {
  const metricsContainer = document.getElementById('current-metrics');
  if (!metricsContainer) return;
  
  const currentData = appData.analytics_sample[0]; // Latest data
  
  metricsContainer.innerHTML = `
    <div class="metric">
      <span class="metric__value">${currentData.temperature_celsius}°C</span>
      <span class="metric__label">Temperature</span>
    </div>
    <div class="metric">
      <span class="metric__value">${currentData.air_quality_index}</span>
      <span class="metric__label">Air Quality</span>
    </div>
    <div class="metric">
      <span class="metric__value">${currentData.visitor_count}</span>
      <span class="metric__label">Visitors Today</span>
    </div>
    <div class="metric">
      <span class="metric__value">${Math.round(currentData.sentiment_score * 100)}%</span>
      <span class="metric__label">Satisfaction</span>
    </div>
  `;
}

function renderVisitorChart() {
  const chartElement = document.getElementById('visitor-chart');
  if (!chartElement) return;
  
  const ctx = chartElement.getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.analytics_sample.map(d => d.station),
      datasets: [{
        label: 'Visitor Count',
        data: appData.analytics_sample.map(d => d.visitor_count),
        borderColor: '#21808D',
        backgroundColor: 'rgba(33, 128, 141, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

function renderEngagementChart() {
  const chartElement = document.getElementById('engagement-chart');
  if (!chartElement) return;
  
  const ctx = chartElement.getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.analytics_sample.map(d => d.station),
      datasets: [{
        label: 'Cultural Engagement',
        data: appData.analytics_sample.map(d => d.cultural_engagement_score),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// Digital Twin Virtual Tours
function enterVirtualTour(sceneId) {
  // Check if already visited this tour
  if (!visitedTours.includes(sceneId)) {
    visitedTours.push(sceneId);
    
    // Award points for first visit
    awardPoints(50, 'Virtual Explorer!');
    
    // Check for Digital Twin Master achievement
    if (visitedTours.length >= 3) {
      checkAchievement('Digital Twin Master');
    }
  }

  // Create and show virtual tour modal
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal__content" style="max-width: 80%; height: 80vh;">
      <div class="modal__header">
        <h3>🥽 Virtual Tour: ${getSceneName(sceneId)}</h3>
        <button class="modal__close" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal__body" style="height: 70vh; display: flex; align-items: center; justify-content: center; background: ${getSceneBackground(sceneId)};">
        <div style="text-align: center; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.7);">
          <div style="font-size: 5rem; margin-bottom: 1rem;">${getSceneIcon(sceneId)}</div>
          <h2>Immersive 360° Experience</h2>
          <p>Virtual reality tour of ${getSceneName(sceneId)}</p>
          <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn--primary" onclick="exploreHotspots('${sceneId}')">🔍 Explore Hotspots</button>
            <button class="btn btn--outline" onclick="this.closest('.modal').remove()">Exit Tour</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function getSceneName(sceneId) {
  const scenes = {
    'maharajas-express': 'Maharajas Express Interior',
    'MEXP001': 'Maharajas Express',
    'POW001': 'Palace on Wheels',
    'DOD001': 'Deccan Odyssey', 
    'GC001': 'Golden Chariot',
    'ajanta-caves': 'Ajanta Cave Paintings',
    'artisan-workshop': 'Traditional Art Workshop'
  };
  return scenes[sceneId] || 'Virtual Experience';
}

function getSceneBackground(sceneId) {
  const backgrounds = {
    'maharajas-express': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
    'MEXP001': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'POW001': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'DOD001': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'GC001': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'ajanta-caves': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'artisan-workshop': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
  };
  return backgrounds[sceneId] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
}

function getSceneIcon(sceneId) {
  const icons = {
    'maharajas-express': '🚂',
    'MEXP001': '🚂',
    'POW001': '👑',
    'DOD001': '🏰',
    'GC001': '✨',
    'ajanta-caves': '🏛️',
    'artisan-workshop': '🎨'
  };
  return icons[sceneId] || '🎮';
}

function exploreHotspots(sceneId) {
  showNotification('Exploring interactive hotspots...', 'info');
  awardPoints(25, 'Hotspot Explorer!');
}

// Gamification System
function renderAchievements() {
  const achievementsGrid = document.getElementById('achievements-grid');
  if (!achievementsGrid) return;
  
  achievementsGrid.innerHTML = appData.user_achievements.map(achievement => {
    const isEarned = earnedAchievements.includes(achievement.name);
    
    return `
      <div class="achievement-badge ${isEarned ? 'earned' : ''}">
        <div class="achievement-icon">${achievement.icon}</div>
        <h4>${achievement.name}</h4>
        <p>${achievement.description}</p>
        <div class="achievement-points">+${achievement.points} points</div>
        ${isEarned ? '<div class="status status--success">Earned</div>' : '<div class="status status--info">Locked</div>'}
      </div>
    `;
  }).join('');
}

function awardPoints(points, message) {
  userPoints += points;
  
  // Update display
  const pointsElement = document.getElementById('total-points');
  if (pointsElement) {
    pointsElement.textContent = userPoints.toLocaleString();
  }
  
  // Show notification
  showNotification(`+${points} Cultural Karma! ${message}`, 'success');
  
  // Check for level up
  checkLevelUp();
}

function checkLevelUp() {
  const newLevel = Math.floor(userPoints / 200) + 1;
  if (newLevel > userLevel) {
    userLevel = newLevel;
    const levelElement = document.getElementById('level');
    if (levelElement) {
      levelElement.textContent = `Level ${userLevel}`;
    }
    showNotification(`🎉 Level Up! You're now Level ${userLevel}`, 'success');
  }
}

function checkAchievement(achievementName) {
  if (!earnedAchievements.includes(achievementName)) {
    earnedAchievements.push(achievementName);
    const achievement = appData.user_achievements.find(a => a.name === achievementName);
    if (achievement) {
      awardPoints(achievement.points, `Achievement Unlocked: ${achievementName}!`);
      renderAchievements();
    }
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-16);
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
    color: var(--color-text);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Artisan Marketplace
function renderArtisanMarketplace() {
  const artisanGrid = document.getElementById('artisan-grid');
  if (!artisanGrid) return;
  
  artisanGrid.innerHTML = appData.art_forms.map(artForm => {
    return `
      <div class="card artisan-card">
        <div class="artisan-header">
          <h3>${artForm.art_form}</h3>
          <p>${artForm.origin_state}</p>
          <div class="verification-badge">
            🔗 Blockchain Verified
          </div>
        </div>
        <div class="card__body artisan-body">
          <div class="art-stats" style="margin-bottom: 16px;">
            <div class="metric">
              <span class="metric__value">${artForm.artist_communities}</span>
              <span class="metric__label">Artisans</span>
            </div>
            <div class="metric">
              <span class="metric__value">${artForm.authenticity_score}/10</span>
              <span class="metric__label">Authenticity</span>
            </div>
          </div>
          <div class="art-tags">
            <span class="tag">GI-${artForm.gi_tag_year}</span>
            <span class="tag">${artForm.workshop_availability ? 'Workshops' : 'Gallery Only'}</span>
            <span class="tag">${artForm.digital_twin_ready ? 'VR Ready' : 'Traditional'}</span>
          </div>
          <div style="margin-top: 16px; display: flex; gap: 8px;">
            <button class="btn btn--primary" onclick="connectWithArtisan('${artForm.art_form}')">
              🤝 Connect
            </button>
            <button class="btn btn--outline" onclick="learnArtForm('${artForm.art_form}')">
              📚 Learn
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function connectWithArtisan(artForm) {
  showNotification(`Connecting you with ${artForm} artisans...`, 'success');
  awardPoints(30, 'Artisan Connection!');
  
  // Check for Artisan Connector achievement
  setTimeout(() => {
    checkAchievement('Artisan Connector');
  }, 1000);
}

function learnArtForm(artForm) {
  showNotification(`Starting ${artForm} learning module...`, 'info');
  awardPoints(20, 'Art Student!');
}

function applyMarketplaceFilters() {
  const artFormFilter = document.getElementById('art-form-filter');
  const stateFilter = document.getElementById('state-filter');
  
  if (artFormFilter && stateFilter) {
    showNotification('Filters applied! Showing matching artisans.', 'info');
  }
}

// Real-time Updates
function setupRealTimeUpdates() {
  // Simulate real-time data updates
  setInterval(updateRealTimeData, 30000); // Update every 30 seconds
}

function updateRealTimeData() {
  // Simulate new data
  const randomStation = ['Mumbai', 'Ajanta', 'Udaipur'][Math.floor(Math.random() * 3)];
  const newData = {
    station: randomStation,
    visitor_count: Math.floor(Math.random() * 200) + 700,
    temperature_celsius: Math.floor(Math.random() * 15) + 20,
    air_quality_index: Math.floor(Math.random() * 100) + 50,
    sentiment_score: Math.random() * 0.3 + 0.7
  };
  
  // Update current metrics with new data if the function exists
  if (typeof renderCurrentMetrics === 'function') {
    renderCurrentMetrics();
  }
}

// Utility Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Global function declarations for onclick handlers
window.startCulturalProfiling = startCulturalProfiling;
window.closeCulturalProfiling = closeCulturalProfiling;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.generateCulturalDNA = generateCulturalDNA;
window.scrollToSection = scrollToSection;
window.viewTrainDetails = viewTrainDetails;
window.enterVirtualTour = enterVirtualTour;
window.exploreHotspots = exploreHotspots;
window.connectWithArtisan = connectWithArtisan;
window.learnArtForm = learnArtForm;
window.applyMarketplaceFilters = applyMarketplaceFilters;

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .compatibility-score {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin-top: 8px;
    color: white;
  }
  
  .art-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  
  .art-stats .metric {
    text-align: center;
    padding: 12px;
    background: var(--color-secondary);
    border-radius: 8px;
  }
  
  .art-stats .metric__value {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 4px;
  }
  
  .art-stats .metric__label {
    font-size: 12px;
    color: var(--color-text-secondary);
  }

  .hero__content {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }

  .badge {
    opacity: 1 !important;
    visibility: visible !important;
  }

  .train {
    opacity: 1 !important;
    visibility: visible !important;
  }
`;
document.head.appendChild(style);

// Initialize sample user achievements after page load
setTimeout(() => {
  if (earnedAchievements.length < 3) {
    checkAchievement('Heritage Guardian');
  }
}, 2000);