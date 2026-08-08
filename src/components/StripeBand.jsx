import './StripeBand.css'

/**
 * The signature motif: the kumkuma-and-limewash stripe painted on South
 * Indian temple compound walls. It marks every threshold on this page the
 * same way it marks the boundary of temple ground.
 */
export default function StripeBand({ flip = false }) {
  return <div className={`stripe-band ${flip ? 'stripe-band--flip' : ''}`} role="presentation" />
}
