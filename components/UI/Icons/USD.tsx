const Icon = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.94031 11.3582V7.47764V3.65674L0 1.26868V8.9851L6.94031 11.3582ZM1.26866 8.01495V3.17913L5.61195 4.65674V9.49257L1.26866 8.01495Z"
        fill={color || '#208ECD'}
      />
      <path d="M1.77612 7.59703L5.08956 8.73136V5.07464L1.77612 3.94031V7.59703Z" fill={color || '#7DD1F6'} />
      <path
        d="M8.92534 5.59702L9.99997 5.97016V1.35821L6.04474 0V1.16418L8.92534 2.16418V5.59702Z"
        fill={color || '#7DD1F6'}
      />
      <path
        d="M2.98511 0.597015V1.7612L7.37317 3.28359V8.25374L8.4478 8.61195V2.47761L2.98511 0.597015Z"
        fill={color || '#35C3F1'}
      />
    </svg>
  )
}

Icon.defaultProps = {
  color: 'currentColor',
}

export default Icon
