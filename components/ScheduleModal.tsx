import React from 'react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // The iframe provided by the user is now embedded in the modal.
  // The corresponding script is loaded once in index.html for performance and reliability.
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-2xl w-full max-w-xl relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale overflow-hidden"
      >
        {/* Increased height to 550px to ensure the form content is not cut off */}
        <div style={{ height: '550px' }}>
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/klW9pUuT77ut8rcmRGPj"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                id="popup-klW9pUuT77ut8rcmRGPj" 
                data-layout="{'id':'POPUP'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Marketing Form - Claim Offer"
                // Increased data-height to give the embedded form more space
                data-height="535"
                data-layout-iframe-id="popup-klW9pUuT77ut8rcmRGPj"
                data-form-id="klW9pUuT77ut8rcmRGPj"
                title="Marketing Form - Claim Offer"
            >
            </iframe>
        </div>
        
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-1 transition-colors z-10" aria-label="Close modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-scale {
            from { opacity: 0; transform: scale(.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 0.2s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ScheduleModal;